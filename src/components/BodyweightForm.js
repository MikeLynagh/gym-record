import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function BodyweightForm() {
	// need state to track bodyweight records
	const [bodyweightrecords, setBodyweightrecords] = useState([]);
	// need state to track value of inputs
	const [bodyweightrecord, setBodyweightrecord] = useState('');

	// function to get value of input and set to new state
	function handleInputChange(e) {
		// set state to value from input box
		setBodyweightrecord(e.target.value);
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

		setBodyweightrecord('');
	}

	return (
		<div className='container'>
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
			{/* // ul to hold bodyweight records */}
			<div className='container'>
				<ul className='bodyweightrecord-list'>
					{/* map over the todos array which creates a new li element for every todo */}
					{bodyweightrecords.map((bodyweightrecord) => (
						<li key={bodyweightrecord.id}>{bodyweightrecord.text} kg</li>
					))}
				</ul>
			</div>
		</div>
	);
}

// import React, { Component, useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import Records from './records';
// import { Link, useNavigate } from 'react-router-dom';

// export default class BodyweightForm extends Component {
// 	userData;
// 	constructor(props) {
// 		super(props);
// 		this.onChangeDate = this.onChangeDate.bind(this);
// 		this.onChangeBodyweight = this.onChangeBodyweight.bind(this);
// 		this.onSubmit = this.onSubmit.bind(this);
// 		this.state = {
// 			date: '',
// 			bodyweight: '',
// 		};
// 	}

// 	// form events

// 	onChangeDate(e) {
// 		this.setState({ date: e.target.value });
// 	}

// 	onChangeBodyweight(e) {
// 		this.setState({ bodyweight: e.target.value });
// 	}

// 	onSubmit(e) {
// 		e.preventDefault();
// 		this.setState({
// 			date: '',
// 			bodyweight: '',
// 		});
// 	}

// 	// react life cycle
// 	componentDidMount() {
// 		this.userData = JSON.parse(localStorage.getItem('record'));
// 		if (localStorage.getItem('record')) {
// 			this.setState({
// 				date: this.userData.date,
// 				bodyweight: this.userData.bodyweight,
// 			});
// 		} else {
// 			this.setState({
// 				date: '',
// 				bodyweight: '',
// 			});
// 		}
// 	}

// 	componentWillUpdate(nextProps, nextState) {
// 		localStorage.setItem('record', JSON.stringify(nextState));
// 	}

// 	render() {
// return (
// 	<div className='container'>
// 		<Form
// 			onSubmit={this.onSubmit}
// 			className='d-grid gap-2'
// 			style={{ margin: '10rem' }}
// 		>
// 			<div>
// 				<h2 className='card-title'>Add Bodyweight</h2>
// 			</div>
// 			<Form.Group className='mb-3' controlId='formDate'>
// 				<label htmlFor='sets'>Enter Date ...</label>
// 				<Form.Control
// 					type='date'
// 					placeholder='Enter Date'
// 					required
// 					value={this.state.date}
// 					onChange={this.onChangeDate}
// 				></Form.Control>
// 			</Form.Group>
// 			<Form.Group className='mb-3' controlId='formWeight'>
// 				<label htmlFor='sets'>Enter Bodyweight ...</label>

// 				<Form.Control
// 					type='text'
// 					placeholder='Enter Bodyweight'
// 					required
// 					value={this.state.bodyweight}
// 					onChange={this.onChangeBodyweight}
// 				></Form.Control>
// 			</Form.Group>
// 			<Button type='submit'>Submit</Button>
// 		</Form>
// 	</div>
// );
// 	}
// }
