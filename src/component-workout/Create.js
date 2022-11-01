import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
	const [form, setForm] = useState({
		date: '',
		exercise: '',
		weight: '',
		sets1: '',
		sets2: '',
		sets3: '',
		sets4: '',
		sets5: '',
		exercise1: '',
		weight1: '',
		sets6: '',
		sets7: '',
		sets8: '',
		sets9: '',
		sets10: '',
		exercise2: '',
		weight2: '',
		sets11: '',
		sets12: '',
		sets13: '',
		sets14: '',
		sets15: '',
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

		setForm({
			date: '',
			exercise: '',
			weight: '',
			sets1: '',
			sets2: '',
			sets3: '',
			sets4: '',
			sets5: '',
			exercise1: '',
			weight1: '',
			sets6: '',
			sets7: '',
			sets8: '',
			sets9: '',
			sets10: '',
			exercise2: '',
			weight2: '',
			sets11: '',
			sets12: '',
			sets13: '',
			sets14: '',
			sets15: '',
		});
		navigate('/');
	}

	// This following section will display the form that takes the input from the user.
	return (
		<div>
			<div
				className='container square border'
				style={{ backgroundcolor: '#fafafa' }}
			>
				<h1>Complete Workout... </h1>
				<form onSubmit={onSubmit}>
					<div class='d-flex justify-content-center'>
						<div className='form-group'>
							<input
								type='date'
								className='form-control'
								id='date'
								value={form.date}
								onChange={(e) => updateForm({ date: e.target.value })}
							/>
						</div>
					</div>
					<div class='d-flex justify-content-between'>
						<div className='form-group'>
							<input
								placeholder='Squat'
								type='text'
								className='form-control'
								id='exercise'
								value={form.exercise}
								onChange={(e) => updateForm({ exercise: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								placeholder='5 x 5 45kg'
								type='number'
								className='form-control'
								id='weight'
								value={form.weight}
								onChange={(e) => updateForm({ weight: e.target.value })}
							/>
						</div>
					</div>
					<div class='d-flex justify-content-evenly'>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								type='number'
								placeholder='5'
								className='form-control'
								id='sets1'
								value={form.sets1}
								onChange={(e) => updateForm({ sets1: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								placeholder='5'
								type='number'
								className='form-control'
								id='sets2'
								value={form.sets2}
								onChange={(e) => updateForm({ sets2: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								type='number'
								placeholder='5'
								className='form-control'
								id='sets3'
								value={form.sets3}
								onChange={(e) => updateForm({ sets3: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								type='number'
								placeholder='5'
								className='form-control'
								id='sets4'
								value={form.sets4}
								onChange={(e) => updateForm({ sets4: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								type='number'
								placeholder='5'
								className='form-control'
								id='sets5'
								value={form.sets5}
								onChange={(e) => updateForm({ sets5: e.target.value })}
							/>
						</div>
					</div>
					<div class='d-flex justify-content-between'>
						<div className='form-group'>
							<input
								placeholder='Squat'
								type='text'
								className='form-control'
								id='exercise1'
								value={form.exercise1}
								onChange={(e) => updateForm({ exercise1: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								placeholder='5 x 5 45kg'
								type='number'
								className='form-control'
								id='weight1'
								value={form.weight1}
								onChange={(e) => updateForm({ weight1: e.target.value })}
							/>
						</div>
					</div>
					<div class='d-flex justify-content-evenly'>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								type='number'
								placeholder='5'
								className='form-control'
								id='sets6'
								value={form.sets6}
								onChange={(e) => updateForm({ sets6: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								placeholder='5'
								type='number'
								className='form-control'
								id='sets7'
								value={form.sets7}
								onChange={(e) => updateForm({ sets7: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								type='number'
								placeholder='5'
								className='form-control'
								id='sets8'
								value={form.sets8}
								onChange={(e) => updateForm({ sets8: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								type='number'
								placeholder='5'
								className='form-control'
								id='sets9'
								value={form.sets9}
								onChange={(e) => updateForm({ sets9: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								type='number'
								placeholder='5'
								className='form-control'
								id='sets10'
								value={form.sets10}
								onChange={(e) => updateForm({ sets10: e.target.value })}
							/>
						</div>
					</div>
					<div class='d-flex justify-content-between'>
						<div className='form-group'>
							<input
								placeholder='Squat'
								type='text'
								className='form-control'
								id='exercise2'
								value={form.exercise2}
								onChange={(e) => updateForm({ exercise2: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								placeholder='5 x 5 45kg'
								type='number'
								className='form-control'
								id='weight2'
								value={form.weight2}
								onChange={(e) => updateForm({ weight2: e.target.value })}
							/>
						</div>
					</div>
					<div class='d-flex justify-content-evenly'>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								type='number'
								placeholder='5'
								className='form-control'
								id='sets11'
								value={form.sets11}
								onChange={(e) => updateForm({ sets11: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								placeholder='5'
								type='number'
								className='form-control'
								id='sets12'
								value={form.sets12}
								onChange={(e) => updateForm({ sets12: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								type='number'
								placeholder='5'
								className='form-control'
								id='sets13'
								value={form.sets13}
								onChange={(e) => updateForm({ sets13: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								type='number'
								placeholder='5'
								className='form-control'
								id='sets14'
								value={form.sets14}
								onChange={(e) => updateForm({ sets14: e.target.value })}
							/>
						</div>
						<div className='form-group'>
							<input
								style={{
									margin: '10px',
									display: 'flex',
									width: '50px',
									height: '50px',
									backgroundColor: 'red',
									borderRadius: '50%',
									color: 'white',
								}}
								type='number'
								placeholder='5'
								className='form-control'
								id='sets15'
								value={form.sets15}
								onChange={(e) => updateForm({ sets15: e.target.value })}
							/>
						</div>
					</div>

					<div className='form-group d-flex justify-content-center'>
						<input
							type='submit'
							value='Save Workout'
							className='btn btn-dark'
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
