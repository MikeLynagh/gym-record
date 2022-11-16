import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function BodyweightForm() {
	// need state to track bodyweight records
	const [bodyweightrecords, setBodyweightrecords] = useState(() => {
		const savedRecords = localStorage.getItem('bodyweightrecords');
		// if there are records saved
		if (savedRecords) {
			// return the parsed JSON object
			return JSON.parse(savedRecords);
		} else {
			// return an empty array
			return [];
		}
	});

	// need state to track value of inputs
	const [bodyweightrecord, setBodyweightrecord] = useState('');

	// boolean to know if we are editing or not
	const [isEditing, setisEditing] = useState(false);
	// object state to know which item is being edited
	const [currentRecord, setCurrentRecord] = useState({});

	// useEffect to run when compount mounts

	useEffect(() => {
		// convert array to string
		localStorage.setItem(
			'bodyweightrecords',
			JSON.stringify(bodyweightrecords)
		);
	}, [bodyweightrecords]);

	// function to get value of input and set to new state
	function handleInputChange(e) {
		// set state to value from input box
		setBodyweightrecord(e.target.value);
	}

	// function to get value of edit input and set new state
	function handleEditInputChange(e) {
		setCurrentRecord({ ...currentRecord, text: e.target.value });
		console.log(currentRecord);
	}

	// function to create a new object on form submit
	function handleFormSubmit(e) {
		e.preventDefault();

		// don't submit if input is an empty string
		if (bodyweightrecord !== '') {
			// set the bodyweightrecords array
			setBodyweightrecords([
				...bodyweightrecords,
				{
					id: bodyweightrecords.length + 1,
					text: bodyweightrecord.trim(),
				},
			]);
		}

		// clear the input form
		setBodyweightrecord('');
	}

	// function to handle edit form submitted
	function handleEditFormSubmit(e) {
		e.preventDefault();
		handleUpdateRecord(currentRecord.id, currentRecord);
	}

	// function to remove item from bodyweight records array
	function handleDelete(id) {
		const removeRecord = bodyweightrecords.filter((bodyweightrecord) => {
			return bodyweightrecord.id !== id;
			console.log(bodyweightrecord.id);
		});
		setBodyweightrecords(removeRecord);
	}

	// function to edit a record item
	function handleUpdateRecord(id, updatedRecord) {
		// map over the bodyweight record array,
		const updatedItem = bodyweightrecords.map((bodyweightrecord) => {
			return bodyweightrecord.id === id ? updatedRecord : bodyweightrecord;
		});
		// set editing to false
		setisEditing(false);
		setBodyweightrecords(updatedItem);
	}

	// function to handle when Edit button is clicked
	function handleEditClick(bodyweightrecord) {
		// editing = true
		setisEditing(true);
		// set currentrecord to item clicked
		setCurrentRecord({ ...bodyweightrecord });
	}

	return (
		<div className='container'>
			{isEditing ? (
				// if editing - display the edit to do input
				<form onSubmit={handleEditFormSubmit}>
					<h2>Edit bodyweight Record </h2>
					<label htmlFor='editBodyweightRecord'> Edit bodyweight entry: </label>
					<Form.Control
						name='editBodyweight'
						type='text'
						placeholder='Edit bodyweight entry '
						value={currentRecord.text}
						onChange={handleEditInputChange}
					></Form.Control>
					{/* add update button here  */}
					<button className='btn btn-dark m-2' type='submit'>
						Update Entry
					</button>
				</form>
			) : (
				<Form
					onSubmit={handleFormSubmit}
					className='d-grid gap-2'
					style={{ margin: '10rem' }}
				>
					<div>
						<h2 className='card-title'>Add Bodyweight</h2>
					</div>
					<Form.Group className='mb-3' controlId='formDate'>
						<label htmlFor='sets'>Enter Date ...</label>
						<Form.Control
							type='date'
							placeholder='Enter Date'
							required
						></Form.Control>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formWeight'>
						<label htmlFor='sets'>Enter Bodyweight ...</label>

						<Form.Control
							type='text'
							placeholder='Enter Bodyweight'
							required
							name='bodyweightrecord'
							onChange={handleInputChange}
							value={bodyweightrecord}
						></Form.Control>
					</Form.Group>
					<Button type='submit'>Submit</Button>
				</Form>
			)}
			{/* // ul to hold bodyweight records */}
			<div className='container'>
				<ul className='bodyweightrecord-list'>
					{/* map over the todos array which creates a new li element for every todo */}
					{bodyweightrecords.map((bodyweightrecord) => (
						<li key={bodyweightrecord.id}>
							{bodyweightrecord.text} kg
							<button
								className='btn btn-dark m-2'
								onClick={() => handleEditClick(bodyweightrecord)}
							>
								Edit
							</button>
							<button
								className='btn btn-dark m-2 '
								onClick={() => handleDelete(bodyweightrecord.id)}
							>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
