import React, { useState } from 'react';
import { BroswerRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Create from './component-workout/Create';
import WorkoutList from './component-workout/Workoutrecord';
import BodyweightForm from './components/BodyweightForm';
import BodyweightRecord from './components/bodyweight-record';

const App = () => {
	// all states

	return (
		<div>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<WorkoutList />} />
				<Route path='/create' element={<Create />} />
				<Route path='/create-bodyweightrecord' element={<BodyweightForm />} />
				<Route path='/view-bodyweight' element={<BodyweightRecord />} />
			</Routes>
		</div>
	);
};

export default App;
