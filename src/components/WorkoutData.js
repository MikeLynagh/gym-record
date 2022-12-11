// import React, { useState, useEffect } from 'react';

// export default function WorkoutData() {
// 	const [data, setData] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	const [search, setSearch] = useState('');

// 	const url = `https://wger.de/api/v2/exerciseinfo/`;

// 	useEffect(() => {
// 		fetch('https://wger.de/api/v2/exerciseinfo/')
// 			.then((response) => response.json())
// 			.then((usefulData) => {
// 				console.log(usefulData.results);
// 				setLoading(false);
// 				setData(usefulData.results);
// 			})
// 			.catch((e) => {
// 				console.error(`An error occurred: ${e}`);
// 			});
// 	}, []);

// 	return (
// 		<div>
// 			<h1>Hello Workout Data</h1>
// 			<div>
// 				{' '}
// 				{loading && <p>Loading...</p>}
// 				{!loading && <p>Fetched data</p>}
// 			</div>
// 			<div>
// 				<label>Search Exercise </label>
// 				<input type='text' onChange={(e) => setSearch(e.target.value)} />
// 			</div>
// 		</div>
// 	);
// }
import React from 'react';
class WorkoutData extends React.Component {
	// constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
		};
	}
	// componentDidMount used to execute code
	componentDidMount() {
		fetch('https://wger.de/api/v2/exerciseinfo/')
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json.results,
					DataisLoaded: true,
				});
			});
	}

	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded)
			return (
				<div>
					<h1>Please wait, content loading ...</h1>
				</div>
			);

		return (
			<div>
				<h1>Fetched data from api </h1>
				{items.map((item) => (
					<ol key={item.id}>Name: {item.name}</ol>
				))}
			</div>
		);
	}
}

export default WorkoutData;
