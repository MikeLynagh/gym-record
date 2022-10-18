import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Create from './component-weight/Create';
import BodyweightList from './component-weight/bodyweightList';

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<BodyweightList />} />
				<Route path='/create' element={<Create />} />
			</Routes>
		</div>
	);
};

export default App;

// import React from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import CreateWorkout from './components/create-workout.component';
// import EditWorkout from './components/edit-workout.component';
// import WorkoutList from './components/workout-list.component';
// import AddWeight from './components/bodyweight/add-bodyweight';

// function App() {
// 	return (
// 		<div className='App'>
// 			<Router>
// 				<header className='App-header'>
// 					<Navbar bg='dark' variant='dark'>
// 						<Container>
// 							<Navbar.Brand>
// 								<Link to={'/create-workout'} className='nav-link'>
// 									Gym-Record
// 								</Link>
// 							</Navbar.Brand>
// 							<Nav className='justify-content-end'>
// 								<Nav>
// 									<Link to={'/create-workout'} className='nav-link'>
// 										Create Workout
// 									</Link>
// 								</Nav>
// 								<Nav>
// 									<Link to={'/workout-list'} className='nav-link'>
// 										Workout List
// 									</Link>
// 								</Nav>
// 								<Nav>
// 									<Link to={'/bodyweight/add-bodyweight'} className='nav-link'>
// 										Add Bodyweight
// 									</Link>
// 								</Nav>
// 							</Nav>
// 						</Container>
// 					</Navbar>
// 				</header>
// 				<Container>
// 					<Row>
// 						<Col md={12}>
// 							<div className='wrapper'>
// 								<Switch>
// 									<Route
// 										exact
// 										path='/'
// 										component={(props) => <CreateWorkout {...props} />}
// 									/>
// 									<Route
// 										exact
// 										path='/create-workout'
// 										component={(props) => <CreateWorkout {...props} />}
// 									/>
// 									<Route
// 										exact
// 										path='/edit-workout/:id'
// 										component={(props) => <EditWorkout {...props} />}
// 									/>
// 									<Route
// 										exact
// 										path='/workout-list'
// 										component={(props) => <WorkoutList {...props} />}
// 									/>
// 									<Route
// 										exact
// 										path='/bodyweight/add-bodyweight'
// 										component={(props) => <WorkoutList {...props} />}
// 									/>
// 								</Switch>
// 							</div>
// 						</Col>
// 					</Row>
// 				</Container>
// 			</Router>
// 		</div>
// 	);
// }
// export default App;
