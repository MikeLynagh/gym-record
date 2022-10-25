import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Record = (props) => (
	<tr>
		<td>{props.record.date}</td>
		<td>{props.record.exercise}</td>
		<td>{props.record.weight}</td>
		<td>{props.record.reps}</td>
		<td>{props.record.sets}</td>

		<td>
			<button
				className='btn btn-link'
				onClick={() => {
					props.deleteRecord(props.record._id);
				}}
			>
				Delete
			</button>
		</td>
	</tr>
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
		return records.map((record) => {
			return <Record record={record} key={record._id} />;
		});
	}

	// this section wil display the table with the records given
	return (
		<div>
			<h3>Record List </h3>
			<table className='table table-striped' style={{ marginTop: 20 }}>
				<thead>
					<tr>
						<th>Date</th>
						<th>Exercise</th>
						<th>Weight</th>
						<th>Reps</th>
						<th>Sets</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{WorkoutList()}</tbody>
			</table>
		</div>
	);
}
