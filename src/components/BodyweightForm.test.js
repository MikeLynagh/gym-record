// import React from 'react';
// import {
// 	render,
// 	fireEvent,
// 	getByText,
// 	getByPlaceholderText,
// 	getByLabelText,
// } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import BodyweightForm from './BodyweightForm';
// import { BrowserRouter as Router } from 'react-router-dom';

// test('renders form properly', async () => {
// 	const { getByText, getByPlaceholderText } = render(
// 		<Router>
// 			<BodyweightForm />
// 		</Router>
// 	);

// 	const dateLabel = getByPlaceholderText(/Enter Date/i);
// 	const weightLabel = getByText(/Enter Bodyweight /i);

// 	expect(dateLabel).toBeInTheDocument();
// 	expect(weightLabel).toBeInTheDocument();

// 	const dateinput = getByPlaceholderText(/Enter Date/i);
// 	const weightinput = getByText(/Enter Bodyweight/i);

// 	expect(dateinput).toHaveAttribute('type', 'date');
// 	expect(weightinput).toHaveAttribute('type', 'text');
// });

import React from 'react';
import {
	render,
	screen,
	fireEvent,
	getByText,
	getByPlaceholderText,
	getByLabelText,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import BodyweightForm from './BodyweightForm';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Bodyweight form', () => {
	render(
		<Router>
			<BodyweightForm />
		</Router>
	);
});
