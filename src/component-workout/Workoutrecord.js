import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';

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
					Exercise 3: {props.record.exercise2}, {props.record.weight2} kg
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

const LastWeight = (props) => {
	const addweight = 2.5;
	const weight = props.record.weight;
	const weight1 = props.record.weight1;
	const weight2 = props.record.weight2;

	return (
		<div className='row mx-auto' style={{ width: '260px' }}>
			<div>
				<table class='table table-bordered table-dark'>
					<thead>
						<tr>
							<th scope='col'>Previous Weight </th>
							<th scope='col'></th>
							<th scope='col'>Target Weight</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan='2'>
								{props.record.exercise} {props.record.weight} kg
							</td>
							<td>
								<h4>{parseInt(weight) + addweight}</h4>
							</td>
						</tr>
						<tr>
							<td colspan='2'>
								{props.record.exercise1}, {props.record.weight1} kg
							</td>
							<td>
								{' '}
								<h4>{parseInt(weight1) + addweight}</h4>
							</td>
						</tr>
						<tr>
							<td colspan='2'>
								{props.record.exercise2}, {props.record.weight2} kg
							</td>
							<td>
								{' '}
								<h4>{parseInt(weight2) + addweight}</h4>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default function WorkoutList() {
	const [records, setRecords] = useState([]);

	// this method fetches the records from the database
	useEffect(() => {
		async function getWorkoutList() {
			const response = await fetch(`http://localhost:5000/record/`);

			if (!response.ok) {
				const message = `An error occurred ${response.statusText}`;
				window.alert(message);
				return;
			}

			const records = await response.json();
			setRecords(records);
			return records;
		}
		getWorkoutList();

		return;
	}, [records.length]);

	// function to delete a workout from list
	async function deleteRecord(id) {
		await fetch(`http://localhost:5000/${id}`, {
			method: 'DELETE',
		});

		const newRecords = records.filter((el) => el._id !== id);
		setRecords(newRecords);
	}

	// this method will map out the recorded bodyweight entries on the table
	function WorkoutList() {
		return records.map((record) => {
			return (
				<Record
					record={record}
					deleteRecord={() => deleteRecord(record._id)}
					key={record._id}
				/>
			);
		});
	}

	function IncreaseWeight() {
		const final2 = records.slice(-2);
		return final2.map((record) => {
			return <LastWeight record={record} key={record._id} />;
		});
	}
	IncreaseWeight();

	// this section wil display the table with the records given
	return (
		<div>
			<Navbar />
			<div className='container'>
				<h1 className='row justify-content-center'>Target Weight </h1>
				<div className='row justify-content-center'>{IncreaseWeight()}</div>

				<h1 className='row justify-content-center'>Previous Workouts </h1>

				<div className='justify-content-center'>{WorkoutList()}</div>
			</div>
		</div>
	);
}
