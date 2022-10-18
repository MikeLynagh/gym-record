import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
	const [form, setForm] = useState({
		date: '',
		weight: '',
		note: '',
	});

	const navigate = useNavigate();

	// these methods will update the state properties
	function updateForm(value) {
		return setForm((prev) => {
			return { ...prev, ...value };
		});
	}

	// this function will handle the submission
	async function onSubmit(e) {
		e.preventDefault();

		// When a post request is sent to the create url, we'll add a new record to the database.
		const newPerson = { ...form };

		await fetch('http://localhost:5000/record/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newPerson),
		}).catch((error) => {
			window.alert(error);
			return;
		});

		setForm({ date: '', weight: '', notes: '' });
		navigate('/');
	}

	// This following section will display the form that takes the input from the user.
	return (
		<div>
			<h3>Create New Record</h3>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='date'>Date</label>
					<input
						type='date'
						className='form-control'
						id='date'
						value={form.date}
						onChange={(e) => updateForm({ date: e.target.value })}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='weight'>Current Bodyweight</label>
					<input
						type='text'
						className='form-control'
						id='weight'
						value={form.weight}
						onChange={(e) => updateForm({ weight: e.target.value })}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='note'>
						Add notes, e.g. feel tired, refreshed etc.
					</label>
					<input
						type='note'
						className='form-control'
						id='note'
						value={form.note}
						onChange={(e) => updateForm({ note: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<input
						type='submit'
						value='Create person'
						className='btn btn-primary'
					/>
				</div>
			</form>
		</div>
	);
}
