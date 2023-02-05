import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [list, setList] = useState([])
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
			<div className="container w-75 d-flex justify-content-center py-5">
				<div className="container row w-50 bg-light rounded-3">
					<input className="col bg-light form-control" type='text' placeholder="Write your stupid task" onChange={(e)=> setInputValue(e.target.value)} value={inputValue} onKeyDown={handleEnter}></input>
					<ul className="list-group list-group-flush list-unstyled p-0 mb-0 bg-light">
						{list.length<1? <p className="ms-3 mt-2 mb-1"><strong className="text-capitalize text-secondary">No tasks! Add a task, idiot...</strong></p>: null} 
						{list.map((task, index) => {
							return (<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="list-group-item d-flex justify-content-start row bg-light" key={index}>
										<li className="col-11 bg-light"><strong className="text-capitalize text-secondary">{task}</strong></li>
										{isHovering && <span className="col-1 bg-light"><strong className="badge bg-danger rounded-pill ">X</strong></span>}
									</div>
									)})}
					</ul>
					<p className="text-capitalize text-secondary bg-light">{list.length < 2 ? `${list.length} task left` :  `${list.length} tasks left`}</p>
				</div>
			</div>
		</>
	);
};

export default Home;
