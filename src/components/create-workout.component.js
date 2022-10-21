import React, { Component } from 'react';
import WorkoutCard from '../design/Workoutcard';

export default class Workout extends Component() {
	constructor(props) {
		super(props);

		this.state = {
			exercise: 'squat',
			SetsandReps: '5 x 5 ',
		};
	}

	render() {
		return (
			<div className='container'>
				<p>Add new workout </p>
				<WorkoutCard />
			</div>
		);
	}
}

// import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';
// export default class CreateWorkout extends Component {
// 	constructor(props) {
// 		super(props);
// 		// set up of functions
// 		this.onChangeExerciseName = this.onChangeExerciseName.bind(this);
// 		// this.onChangeWeightno = this.onChangeWeightno.bind(this);
// 		// this.onChangeRepsno = this.onChangeRepsno.bind(this);
// 		// this.onChangeSetsno = this.onChangeSetsno.bind(this);
// 		this.onSubmit = this.onSubmit.bind(this);

// 		// setting up state
// 		this.state = {
// 			exercise: '',
// 			// weight: '',
// 			// reps: '',
// 		};
// 	}

// 	onChangeExerciseName(e) {
// 		this.setState({ exercise: e.target.value });
// 	}
// 	// onChangeWeightno(e) {
// 	// 	this.setState({ weight: e.target.value });
// 	// }
// 	// onChangeRepsno(e) {
// 	// 	this.setState({ reps: e.target.value });
// 	// }

// 	onSubmit(e) {
// 		e.preventDefault();
// 		const workoutObject = {
// 			exercise: this.state.exercise,
// 			// weight: this.state.weight,
// 			// reps: this.state.reps,
// 			// sets: this.state.sets,
// 		};

// 		axios
// 			.post('http://localhost:4000/workouts/create-workout', workoutObject)
// 			.then((res) => console.log(res.data));
// 		this.setState({ exercise: '' });
// 	}

// 	render() {
// 		return (
// 			// the component below is for a form that a user can enter data into
// 			<div class='form-wrapper'>
// 				<p>React workoutout part</p>
// 				<Form onSubmit={this.onSubmit}>
// 					<Form.Group className='mb-3' controlId='Exercise'>
// 						<Form.Label>Exercise</Form.Label>
// 						<Form.Control
// 							type='text'
// 							value={this.state.exercise}
// 							onChange={this.onChangeExerciseName}
// 							placeholder='Enter exercise'
// 						/>
// 					</Form.Group>
// 					<Form.Group className='mb-3' controlId='Weight'>
// 						<Form.Label>Weight in KG</Form.Label>
// 						<Form.Control type='number' placeholder='Enter weight used' />
// 					</Form.Group>

// 					<Form.Group className='mb-3' controlId='Reps'>
// 						<Form.Label>Reps</Form.Label>
// 						<Form.Control type='number' placeholder='Enter no. of reps' />
// 					</Form.Group>
// 					<Form.Group className='mb-3' controlId='Reps'>
// 						<Form.Label>Sets</Form.Label>
// 						<Form.Control type='number' placeholder='Enter no. of sets' />
// 					</Form.Group>

// 					<Button
// 						variant='primary'
// 						type='submit'
// 						block='block'
// 						className='mt-4'
// 					>
// 						Submit
// 					</Button>
// 				</Form>
// 			</div>
// 		);
// 	}
// }
