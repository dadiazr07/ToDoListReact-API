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
			setList([...list,inputValue]);
			setInputValue("")
		}
	}


	return (
		<>
		<div className="text-center">
			<input type='text' placeholder="Write your stupid task" onChange={(e)=> setInputValue(e.target.value)} value={inputValue}
			onKeyDown={handleEnter}></input>
			<ul className="list-group-numbered p-0">
				{list.map((task, index) => {
					return (<li key={index} className="list-group-item mt-2 mb-2 p-0">{task}</li>)
				})}
			</ul>
		</div>
		</>
	);
};

export default Home;
