import React, { useState, useEffect } from 'react';
import bootstrap from 'bootstrap';

export default function WorkoutData() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	// search query set as empty string
	const [q, setQ] = useState('');

	// set search parameters
	// search exercises by name
	const [searchScope] = useState(['name']);

	useEffect(() => {
		// make a get request to the url below
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
				// handle errors if no response from api request
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	function search(items) {
		return items.filter((item) => {
			return searchScope.some((newItem) => {
				return (
					item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
				);
			});
		});
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading ...</div>;
	} else {
		return (
			<div className='container'>
				<div>
					<h1 className='row justify-content-center'>Exercise Library </h1>
					<div className='row justify-content-center form-outline '>
						<label htmlFor='search-form'>
							<input
								type='search'
								name='search-form'
								id='search-form'
								className='form-control'
								placeholder='Search Exercise ... '
								value={q}
								onChange={(e) => setQ(e.target.value)}
							/>
						</label>
					</div>
					<div>
						<>
							{search(items).map((item) => (
								<ol key={item.id}>
									<div className='row justify-content-center card mt-3 mx-auto'>
										<img
											className='card-img-top'
											src={item.gifUrl}
											alt='image of gym exercise'
										/>
										<div className='card-body'>
											<h5 className='card-title'>{item.name}</h5>
											<p class='card-text'>Equipment: {item.equipment}</p>
											<p class='card-text'>Target Body Area: {item.target}</p>
										</div>
									</div>
								</ol>
							))}
						</>
					</div>
					<div>{items.map((items) => console.log(items))}</div>
				</div>
			</div>
		);
	}
}
