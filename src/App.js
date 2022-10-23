import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/navbar';
import Create from './component-weight/Create';
import BodyweightList from './component-weight/bodyweightList';
import AddWorkout from './components/AddWorkout';
import WorkoutsList from './components/workout-list.component';

const App = () => {
	// all states

	return (
		<div>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<BodyweightList />} />
				<Route path='/create' element={<Create />} />
				<Route path='/create-workout' element={<AddWorkout />} />
				<Route path='/view-workouts' element={<WorkoutsList />} />
			</Routes>
		</div>
	);
};

export default App;
