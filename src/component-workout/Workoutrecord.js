import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Record = (props) => (
	<div className='row mx-auto' style={{ width: '300px' }}>
		<div className='col-sm-8'>
			<div className='card mt-3' style={{ width: '25rem' }}>
				<div className='card-body'></div>
				<h5 className='card-title'>Date: {props.record.date}</h5>
				<h6 class='card-subtitle mb-2 text-muted'>
					Ex 1: {props.record.exercise}, {props.record.weight} kg, Sets & Reps:{' '}
					{props.record.sets1} {props.record.sets2} {props.record.sets3}{' '}
					{props.record.sets4} {props.record.sets5}
				</h6>
				<h6 class='card-subtitle mb-2 text-muted'>
					Ex 2: {props.record.exercise1}, {props.record.weight1} kg, Sets &
					Reps: {props.record.sets1} {props.record.sets2} {props.record.sets3}{' '}
					{props.record.sets4} {props.record.sets5}
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

// export default function WorkoutList() {
// 	const [records, setRecords] = useState([]);

// 	useEffect(() => {
// 		const getWorkoutList = async () => {
// 			const res = await axios.get(
// 				'http://localhost:8800/api/posts/workouts/63661f6f45c33bb71360b74d'
// 			);

// 			const records = res.data;
// 			setRecords(records);
// 			console.log(records);
// 		};
// 		getWorkoutList();
// 	}, []);

// 	function WorkoutList() {
// 		return records.map((record) => {
// 			return <Record record={record} key={record._id} />;
// 		});
// 	}

// 	return (
// 		<div>
// 			<h3>Previous Workouts </h3>
// 			// <div>{WorkoutList()}</div>
// 		</div>
// 	);
// }

// this is the old code - it works fine ********************`
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
