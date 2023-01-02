import React from 'react';
import {
	render,
	screen,
	fireEvent,
	getByText,
	getByPlaceholderText,
	getByLabelText,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WorkoutData from './WorkoutData';
import { BrowserRouter as Router } from 'react-router-dom';
beforeEach(() => {
	jest.spyOn(window, 'fetch').mockImplementation(WorkoutData);
});

afterEach(() => {
	jest.restoreAllMocks();
});
