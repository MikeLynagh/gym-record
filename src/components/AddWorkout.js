import React from 'react';
import WorkoutForm from './WorkoutForm';

const AddWorkout = () => {
	const handleSubmit = (workout) => {
		console.log(workout);
	};

	return (
		<div>
			<WorkoutForm handleSubmit={handleSubmit} />
		</div>
	);
};

export default AddWorkout;
