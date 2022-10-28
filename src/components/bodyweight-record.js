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

		var index = Records.map(function (e) {
			return e.id;
		}).indexOf(id);

		Records.splice(index, 1);

		history('/view-bodyweight');
	};

	return (
		<div className='container'>
			<h2>List of Weights </h2>
			<div style={{ margin: '10rem' }}>
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
											<td>{item.Date}</td>
											<td>{item.Weight}</td>
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
														handleEdit(item.id, item.Date, item.Weight)
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
