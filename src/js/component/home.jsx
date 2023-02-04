import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [list, setList] = useState([])
	const [counter, setCounter] = useState(0)
	const [inputValue, setInputValue] = useState("")

	const handleEnter = (enter) =>{
		if(enter.key === 'Enter'){
			if(inputValue != ""){
				setList([...list,inputValue]);
				setCounter = 
				setInputValue("")
			}
		}
	}


	return (
		<>
			<div className="text-center">
				<input type='text' placeholder="Write your stupid task" onChange={(e)=> setInputValue(e.target.value)} value={inputValue}
				onKeyDown={handleEnter}></input>
				<ul className="list-group-numbered p-0">
					{list.map((task, index) => {
						return (<div className="list-group-item d-flex justify-content-center row" key={index}>
									<li className="col-4">{task}</li>
									<span className="col-1">X</span>
								</div>
							)
					})}
				</ul>
			</div>
		</>
	);
};

export default Home;
