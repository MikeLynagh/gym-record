// import React from 'react';
// class WorkoutData extends React.Component {
// 	// constructor
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			items: [],
// 			DataisLoaded: false,
// 		};
// 	}
// 	// componentDidMount used to execute code
// 	componentDidMount() {
// 		fetch( 'https://exercisedb.p.rapidapi.com/exercises', {
//   	"method": "GET",
//  	 "headers": {
// 	'X-RapidAPI-Key': '7f72d4ba00mshf1ff8b96262e395p13878bjsn00b8ac2a4c8f',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// })
// 		.then((response) => response.json())
// 			.then((response) => {
// 				this.setState({
// 					items: response,
// 					DataisLoaded: true,
// 				})
// 			})
// 			.catch(err => {console.log(err)})
// 	}

// 	render() {
// 		const { DataisLoaded, items } = this.state;
// 		if (!DataisLoaded)
// 			return (
// 				<div>
// 					<h1>Please wait, content loading ...</h1>
// 				</div>
// 			);

// 		return (
// 			<div>
// 				<h1>Fetched data from api </h1>
// 				{items.map((item) => (
// 					<ol key={item.id}>
// 						Name: {item.name}
// 						Description: {item.description}
// 					</ol>
// 				))}
// 			</div>
// 		);
// 	}
// }

// export default WorkoutData;

import React, { useState, useEffect } from 'react';

export default function WorkoutData() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://exercisedb.p.rapidapi.com/exercises', {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '7f72d4ba00mshf1ff8b96262e395p13878bjsn00b8ac2a4c8f',
				'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
			},
		})
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading ...</div>;
	} else {
		return (
			<ul>
				{items.map((item) => (
					<ol key={item.id}>
						Name: {item.name}
						Description: {item.description}
					</ol>
				))}
			</ul>
		);
	}
}
