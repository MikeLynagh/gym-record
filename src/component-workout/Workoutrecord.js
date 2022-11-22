import React, { useEffect, useState } from 'react';

const Record = (props) => (
	<div className='row mx-auto' style={{ width: '200px' }}>
		<div className='col-sm-8'>
			<div className='card mt-3' style={{ width: '18rem' }}>
				<div className='card-body'></div>
				<h5 className='card-title'>Date: {props.record.date}</h5>
				<h6 class='card-subtitle mb-2 text-muted'>
					Exercise 1: {props.record.exercise}, {props.record.weight} kg
				</h6>

				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						Sets and Reps: {props.record.sets1} {props.record.sets2}{' '}
						{props.record.sets3} {props.record.sets4} {props.record.sets5}
					</li>
				</ul>
				<h6 class='card-subtitle mb-2 text-muted'>
					Exercise 2: {props.record.exercise1}, {props.record.weight1} kg
				</h6>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						Sets and Reps: {props.record.sets6} {props.record.sets7}{' '}
						{props.record.sets8} {props.record.sets9} {props.record.sets10}
					</li>
				</ul>
				<h6 class='card-subtitle mb-2 text-muted'>
					Exercise 3: {props.record.exercise}, {props.record.weight} kg
				</h6>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						Sets and Reps: {props.record.sets1} {props.record.sets2}{' '}
						{props.record.sets3} {props.record.sets4} {props.record.sets5}
					</li>
				</ul>
				<button
					className='btn btn-link'
					onClick={() => {
						props.deleteRecord(props.record._id);
					}}
				>
					Delete
				</button>
			</div>
		</div>
	</div>
);

export default function WorkoutList() {
	const [records, setRecords] = useState([]);

	// this method fetches the records from the database
	useEffect(() => {
		async function getbodyweightList() {
			const response = await fetch(`http://localhost:5000/record/`);

			if (!response.ok) {
				const message = `An error occurred ${response.statusText}`;
				window.alert(message);
				return;
			}

			const records = await response.json();
			setRecords(records);
		}
		getbodyweightList();

		return;
	}, [records.length]);

	// this method will map out the recorded bodyweight entries on the table
	function WorkoutList() {
		console.log(records);
		return records.map((record) => {
			return <Record record={record} key={record._id} />;
		});
	}

	// this section wil display the table with the records given
	return (
		<div>
			<h3>Previous Workouts </h3>

			<div>{WorkoutList()}</div>
		</div>
	);
}
