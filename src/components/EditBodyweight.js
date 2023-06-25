import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
// import Records from './records';
import { useNavigate } from 'react-router-dom';

function Edit() {
	const [date, setDate] = useState('');
	const [weight, setWeight] = useState('');
	const [id, setId] = useState('');

	let history = useNavigate();

	// new code here 
	useEffect(() => {
		const storedRecords = JSON.parse(localStorage.getItem("Records"))
		const storedDate = localStorage.getItem("date")
		const storedWeight = localStorage.getItem("weight")
		const storedId = localStorage.getItem("id")

		if(storedRecords){
			const index = storedRecords.findIndex((record) => record.id === storedId)

			if(index !== -1){
				setDate(storedDate)
				setWeight(storedWeight)
				setId(storedId)
			}
		}
	}, [])


	// var index = Records.map(function (e) {
	// 	return e.id;
	// }).indexOf(id);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	let a = Records[index];
	// 	a.date = date;
	// 	a.weight = weight;

	// 	history('/view-bodyweight');
	// };

	// useEffect(() => {
	// 	setDate(localStorage.getItem('date'));
	// 	setWeight(localStorage.getItem('weight'));
	// 	setId(localStorage.getItem('id'));
	// }, []);

	const handleSubmit = (e) => {
		e.preventDefault();
	
		const updatedRecords = JSON.parse(localStorage.getItem('Records'));
		const index = updatedRecords.findIndex((record) => record.id === id);
	
		if (index !== -1) {
		  updatedRecords[index] = { ...updatedRecords[index], date, weight };
		  localStorage.setItem('Records', JSON.stringify(updatedRecords));
		}
	
		history('/view-bodyweight');
	  };

	return (
		<div className='container'>
			<Form className='d-grid gap-2' style={{ margin: '10rem' }}>
				<div>
					<h2 className='card-title'>Edit Old Records</h2>
				</div>
				<Form.Group className='mb-3' controlId='formDate'>
					<label htmlFor='sets'>Enter Date ...</label>
					<Form.Control
						type='date'
						placeholder='Enter Date'
						value={date}
						required
						onChange={(e) => setDate(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formWeight'>
					<label htmlFor='sets'>Enter Bodyweight ...</label>

					<Form.Control
						type='text'
						placeholder='Enter Bodyweight'
						value={weight}
						required
						onChange={(e) => setWeight(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Button onClick={(e) => handleSubmit(e)} type='submit'>
					Update
				</Button>
			</Form>
		</div>
	);
}

export default Edit;
