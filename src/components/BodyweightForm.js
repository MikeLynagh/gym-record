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
// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { v4 as uuidv4 } from 'uuid';

// const WorkoutForm = (props) => {
// 	const [workout, setWorkout] = useState({
// 		exercise: props.workout ? props.workout.exercise : '',
// 		reps: props.workout ? props.workout.reps : '',
// 		sets: props.workout ? props.workout.price : '',
// 		date: props.workout ? props.workout.date : '',
// 	});

// 	const [errorMsg, setErrorMsg] = useState('');
// 	const { exercise, reps, sets } = workout;

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		const values = [exercise, reps, sets];
// 		let errorMsg = '';

// 		const allFieldsFilled = values.every((field) => {
// 			const value = `${field}`.trim();
// 			return value !== '' && value !== '0';
// 		});

// 		if (allFieldsFilled) {
// 			const workout = {
// 				id: uuidv4(),
// 				exercise,
// 				reps,
// 				sets,
// 				date: new Date(),
// 			};
// 			props.handleSubmit(workout);
// 		} else {
// 			errorMsg = 'Please fill out all the fields.';
// 		}
// 		setErrorMsg(errorMsg);
// 	};

// 	const handleInputChange = (event) => {
// 		const { name, value } = event.target;
// 		switch (name) {
// 			case 'reps':
// 				if (value === '' || parseInt(value) === +value) {
// 					setWorkout((prevState) => ({
// 						...prevState,
// 						[name]: value,
// 					}));
// 				}
// 				break;
// 			case 'sets':
// 				if (value === '' || parseInt(value) === +value) {
// 					setWorkout((prevState) => ({
// 						...prevState,
// 						[name]: value,
// 					}));
// 				}
// 				break;
// 			default:
// 				setWorkout((prevState) => ({
// 					...prevState,
// 					[name]: value,
// 				}));
// 		}
// 	};

// 	return (
// 		<div className='main-form'>
// 			{errorMsg && <p className='errorMsg'>{errorMsg}</p>}
// 			<Form onSubmit={handleSubmit}>
// 				<Form.Group controlId='exercise'>
// 					<Form.Label>Enter exercise</Form.Label>
// 					<Form.Control
// 						className='input-control'
// 						type='text'
// 						name='exercise'
// 						value={exercise}
// 						placeholder='Enter exercise'
// 						onChange={handleInputChange}
// 					/>
// 				</Form.Group>
// 				<Form.Group controlId='reps'>
// 					<Form.Label>Enter Reps</Form.Label>
// 					<Form.Control
// 						className='input-control'
// 						type='number'
// 						name='reps'
// 						value={reps}
// 						placeholder='Enter reps completed'
// 						onChange={handleInputChange}
// 					/>
// 				</Form.Group>
// 				<Form.Group controlId='sets'>
// 					<Form.Label>Enter Sets</Form.Label>
// 					<Form.Control
// 						className='input-control'
// 						type='number'
// 						name='sets'
// 						value={sets}
// 						placeholder='Enter sets completed '
// 						onChange={handleInputChange}
// 					/>
// 				</Form.Group>
// 				<Button variant='primary' type='submit' className='submit-btn'>
// 					Submit
// 				</Button>
// 			</Form>
// 		</div>
// 	);
// };

// export default WorkoutForm;
