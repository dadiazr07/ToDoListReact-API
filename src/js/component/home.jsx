import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [list, setList] = useState([])
	const [counter, setCounter] = useState(0)
	const [inputValue, setInputValue] = useState("")
	const [isHovering, setIsHovering] = useState(false);

	const handleEnter = (enter) =>{
		if(enter.key === 'Enter'){
			if(inputValue != ""){
				setList([...list,inputValue]);
				setCounter = 
				setInputValue("")
			}
		}
	}

	const handleMouseOver = () => {
	  setIsHovering(true);
	};
	const handleMouseOut = () => {
	  setIsHovering(false);
	};
	// onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}

	return (
		<>
			<div className="container w-100 d-flex justify-content-center py-5">
				<div className="row w-50">
					<input className="col" type='text' placeholder="Write your stupid task" onChange={(e)=> setInputValue(e.target.value)} value={inputValue} onKeyDown={handleEnter}></input>
					<ul className="list-group list-group-flush list-unstyled p-0 mb-0">
						{list.map((task, index) => {
							return (<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="list-group-item d-flex justify-content-start row" key={index}>
										<li className="col-11">{task}</li>
										{isHovering && 
										<span className="col-1 badge bg-danger rounded-pill ">X</span>
										}
									</div>
									)})}
					</ul>
					<p>{list.length < 2 ? `${list.length} task left` :  `${list.length} tasks left`}</p>
				</div>
			</div>
		</>
	);
};

export default Home;
