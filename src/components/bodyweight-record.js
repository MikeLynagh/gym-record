import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import LineChart from './LineChart';
import Navigationbar from './Navigationbar';

const BodyweightRecord = () => {
	let history = useNavigate();
	const [records, setRecords] = useState([])

	// checks for latest "record" in storage 
	useEffect(() => {
		const storedRecords = JSON.parse(localStorage.getItem("Records"))
		if(storedRecords){
			setRecords(storedRecords)
		}
	}, [])

	// function to edit previous bodyweight record entries
	const handleEdit = (date, weight, id) => {
		localStorage.setItem('date', date);
		localStorage.setItem('weight', weight);
		localStorage.setItem('id', id);

		history('/edit');
	};

	
	const handleDelete = (id) => {
		// find the id to delete
		const updatedRecords = records.filter((record) => record.id !== id)
		//update localstorage with this new record 
		localStorage.setItem("Records", JSON.stringify(updatedRecords))
		setRecords(updatedRecords)
		history("/view-bodyweight")
	}
	

	const userData = {
		labels: records.map((item) => item.date),
		datasets: [
		  {
			label: 'Bodyweight Records (KG)',
			data: records.map((item) => item.weight),
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
	  };
	

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
							{records && records.length > 0
								? (records.map((item) => {
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
								): (
									<tr>
										<td colSpan="3">No data available</td>
									</tr>
								)}
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
