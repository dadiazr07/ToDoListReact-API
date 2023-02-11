import { element, object } from "prop-types";
import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [list, setList] = useState([])
	const [inputValue, setInputValue] = useState("")
	const [hoveringIndex, setHoveringIndex] = useState(null);


	auxList = list.map(obj => {`label: ${obj}`, 'done: false'})
	console.log(auxList)

	const handleEnter = (enter) =>{
		if(enter.key === 'Enter'){
			if(inputValue != ""){
				setList([...list,inputValue]);
				setInputValue("")
			}
		}
	}

	const handleRemove = (index) => {
		const newList = list.slice(0, index).concat(list.slice(index+1));
		setList(newList);
	}

	const getData = () => {
		fetch('https://assets.breatheco.de/apis/fake/todos/user/restrepo', {
			method: "GET",
		  	headers: {
		    	"Content-Type": "application/json"
		  	}
			})
		  .then(resp => resp.json())
		  .then(data => setList(data.map(({label}) => label)))
		  .catch(error => console.error(error));
	}

	// const putData = () => {
	// 	fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
	// 		method: "PUT",
	// 		body: JSON.stringify(auxList),
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		}
	// 		})
	// 		.then(resp => {
	// 			console.log(resp.ok); // will be true if the response is successfull
	// 			console.log(resp.status); // the status code = 200 or code = 400 etc.
	// 			console.log(resp.text()); // will try return the exact result as string
	// 			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
	// 		})
	// 		.then(data => {
	// 			//here is were your code should start after the fetch finishes
	// 			console.log(data); //this will print on the console the exact object received from the server
	// 		})
	// 		.catch(error => {
	// 			//error handling
	// 			console.log(error);
	// 		});
	// }









	useEffect(
		() => getData()
	


		
		, []);

	


	return (
		<>
			<div className="container w-75 d-flex justify-content-center py-5">
				<div className="container row w-50 bg-light rounded-3">
					<input className="col bg-light form-control m-1" type='text' placeholder="Write your stupid task." onChange={(e)=> setInputValue(e.target.value)} value={inputValue} onKeyDown={handleEnter}></input>

					<ul className="list-group list-group-flush list-unstyled p-0 mb-0 bg-light">
						{list.length < 1 ? <p className="ms-3 mt-2 mb-1"><strong className="text-capitalize text-secondary">No tasks! Add a task, idiot...</strong></p> : 
							list.map((task, index) => {
							return (<div key={index} onMouseOver={() => setHoveringIndex(index)} onMouseLeave={() => setHoveringIndex(null)} className="list-group-item d-flex justify-content-start row bg-light">
										{hoveringIndex === index ? 
										<><li className="col-11 bg-light"><strong className="text-capitalize text-secondary">{task}.</strong></li>
										<span type="button" className="col-1 bg-light" onClick={() => handleRemove(index)}><strong className="badge bg-danger rounded-pill ">X</strong></span></>
										:
										<li className="col-11 bg-light"><strong className="text-capitalize text-secondary">{task}.</strong></li>}
									</div>
									)})}
					</ul>
					<p className="text-capitalize text-secondary bg-light">{list.length < 2 ? (list.length > 0 ? `${list.length} stuff left to do...` : `Looks like you don't have a life...`) :  `${list.length} "interesting" tasks left...`}</p>
				</div>
			</div>
		</>
	);
};

export default Home;
