import React from 'react';
import { Button, Table } from 'react-bootstrap';
import Records from './records';
import { Link, useNavigate } from 'react-router-dom';

const BodyweightRecord = () => {
	let history = useNavigate();

	const handleEdit = (id, date, weight) => {
		// update this function to work off list from localstorage

		localStorage.setItem('Date', date);
		localStorage.setItem('Weight', weight);
		localStorage.setItem('Id', id);

		history('/edit');
	};

	const handleDelete = (id) => {
		// update this function to work off array from localstorage
		// iterate over records using map, find record by id
		var index = Records.map(function(e) {
			return e.id;
		}).indexOf(id);
		// remove an element of the array at index
		Records.splice(index, 1);
		// update localstorage, this has the updated records array.
		localStorage.setItem('Records', JSON.stringify(Records));
		history('/view-bodyweight');
	};

	return (
		<div className='container'>
			<h2>List of Weights </h2>
			<div style={{ margin: '8rem' }}>
				<Table striped bordered hover size='sm'>
					<thead>
						<tr>
							<th>Date</th>
							<th>Weight</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{Records && Records.length > 0
							? Records.map((item) => {
									return (
										<tr>
											<td>{item.date}</td>
											<td>{item.weight}</td>
											<td>
												<Button
													onClick={() => handleDelete(item.id)}
													className='btn btn-dark'
												>
													Delete
												</Button>
												&nbsp;
												<Button
													onClick={() =>
														handleEdit(item.id, item.weight, item.date)
													}
													className='btn btn-dark'
												>
													Edit
												</Button>
											</td>
										</tr>
									);
							  })
							: 'No data available'}
					</tbody>
				</Table>
				<br></br>
				<Link className='d-grid gap-2' to='/add-bodyweightrecord'>
					<Button size='lg btn btn-dark'>Create</Button>
				</Link>
			</div>
		</div>
	);
};

export default BodyweightRecord;
