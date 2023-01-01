import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import WorkoutData from '../components/WorkoutData';
import Navbar from '../components/navbar';

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
	// boolean to show workout 1
	const [isShown, setIsShown] = useState(false);
	// boolean to show workout 2
	const [iShownWorkout2, setIsShownWorkout2] = useState(false);

	//boolean state to set button backgroun color
	const [isActive, setIsActive] = useState(false);

	// function to change boolean status on click
	const handleClick = (event) => {
		setIsShown((current) => !current);
	};

	// function change boolean status for workout 2
	const handleClickWorkout2 = (event) => {
		setIsShownWorkout2((current) => !current);
	};

	// function to change boolean status for reps button
	//change button color from red to green
	const handleClickReps = (event) => {
		setIsActive((current) => !current);
	};

	// function updateForm will update state properties
	function updateForm(value) {
		return setForm((prev) => {
			return { ...prev, ...value };
		});
	}

	// this function will handle the submission
	async function onSubmit(e) {
		e.preventDefault();

		// When a post request is sent to the url below,
		//we'll add a new record to the database.

		// when post request sent, adds a new record to database
		const newRecord = { ...form };

		await fetch('http://localhost:5000/record/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newRecord),
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
		navigate('/workoutlist');
	}

	// form to record workout

	return (
		<div>
			<Navbar />

			<div
				className='container square border'
				style={{ backgroundcolor: '#fafafa' }}
			>
				<div className='mb-2'>
					<h1>Choose Workout </h1>
				</div>
				<div className='d-grid gap-2'>
					<Button onClick={handleClick} className='btn btn-dark'>
						Workout 1{' '}
					</Button>
					<Button onClick={handleClickWorkout2} className='btn btn-dark'>
						Workout 2{' '}
					</Button>
				</div>

				{isShown && (
					<div>
						<h1>Complete Workout... </h1>
						<form onSubmit={onSubmit}>
							<div class='d-flex justify-content-center'>
								<div className='form-group'>
									<input
										type='date'
										className='form-control'
										id='date'
										required
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
										required
										value={form.weight}
										onChange={(e) => updateForm({ weight: e.target.value })}
									/>
								</div>
							</div>
							<div class='d-flex justify-content-evenly'>
								<div className='form-group'>
									<input
										onClick={handleClickReps}
										style={{
											margin: '10px',
											display: 'flex',
											width: '50px',
											height: '50px',
											backgroundColor: isActive ? 'green' : 'red',
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
										placeholder='Bench Press'
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
										required
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
										placeholder='OH Push '
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
										required
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
				)}
				{iShownWorkout2 && (
					<div>
						<h1>Complete Workout... </h1>
						<form onSubmit={onSubmit}>
							<div class='d-flex justify-content-center'>
								<div className='form-group'>
									<input
										type='date'
										className='form-control'
										id='date'
										required
										value={form.date}
										onChange={(e) => updateForm({ date: e.target.value })}
									/>
								</div>
							</div>
							<div class='d-flex justify-content-between'>
								<div className='form-group'>
									<input
										placeholder='Deadlift'
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
										required
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
										placeholder='Lunge'
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
										required
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
										placeholder='BarBell Row'
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
										required
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
				)}
			</div>
			<div
				className='container square border'
				style={{ backgroundcolor: '#fafafa' }}
			>
				<WorkoutData />
			</div>
		</div>
	);
}
