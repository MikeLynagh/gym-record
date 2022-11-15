import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Records from './records';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

const BodyweightForm = () => {
	const [date, setDate] = useState('');
	const [weight, setWeight] = useState('');

	let history = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const ids = uuid();
		let uniqueId = ids.slice(0, 8);

		let a = date;
		let b = weight;
		console.log(a);
		console.log(b);

		Records.push({ id: uniqueId, Date: a, Weight: b });
		console.log(Records);

		localStorage.setItem('Records', JSON.stringify(Records));

		history('/view-bodyweight');
	};

	return (
		<div className='container'>
			<Form className='d-grid gap-2' style={{ margin: '10rem' }}>
				<div>
					<h2 className='card-title'>Add Bodyweight</h2>
				</div>
				<Form.Group className='mb-3' controlId='formDate'>
					<label htmlFor='sets'>Enter Date ...</label>
					<Form.Control
						type='date'
						placeholder='Enter Date'
						required
						onChange={(e) => setDate(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formWeight'>
					<label htmlFor='sets'>Enter Bodyweight ...</label>

					<Form.Control
						type='text'
						placeholder='Enter Bodyweight'
						required
						onChange={(e) => setWeight(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Button onClick={(e) => handleSubmit(e)} type='submit'>
					submit
				</Button>
			</Form>
		</div>
	);
};

export default BodyweightForm;
