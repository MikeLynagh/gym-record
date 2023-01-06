import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Records from './Records';
import { Link, useNavigate } from 'react-router-dom';
import LineChart from './LineChart';
import Navigationbar from './Navigationbar';

const BodyweightRecord = () => {
	let history = useNavigate();

	// function to edit previous bodyweight record entries
	const handleEdit = (date, weight, id) => {
		localStorage.setItem('date', date);
		localStorage.setItem('weight', weight);
		localStorage.setItem('id', id);

		history('/edit');
	};

	const handleDelete = (id) => {
		// update this function to work off array from localstorage
		// iterate over records using map, find record by id
		var index = Records.map(function (e) {
			return e.id;
		}).indexOf(id);
		// remove an element of the array at index
		Records.splice(index, 1);
		// update localstorage, this has the updated records array.
		localStorage.setItem('Records', JSON.stringify(Records));
		history('/view-bodyweight');
	};

	//  data for line graph
	const [userData, setUserData] = useState({
		labels: Records.map((item) => item.date),
		datasets: [
			{
				label: 'Bodyweight Records (KG)',
				data: Records.map((item) => item.weight),
				backgroundColor: [
					'rgba(75,192,192,1)',
					'#ecf0f1',
					'#50AF95',
					'#f3ba2f',
					'#2a71d0',
				],
				borderColor: 'black',
				borderWidth: 2,
			},
		],
	});

	return (
		<div>
			<Navigationbar />
			<div className='container'>
				<div>
					<LineChart chartData={userData} />
				</div>
				<h1 className='row justify-content-center'>
					Previous Bodyweight Records{' '}
				</h1>
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
												<td>{item.weight} kg</td>
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
															handleEdit(item.date, item.weight, item.id)
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
		</div>
	);
};

export default BodyweightRecord;
