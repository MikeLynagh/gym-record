import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function WorkoutCard({ exercise }) {
	return (
		<div className='card bg-secondary' style={{ width: '18 rem' }}>
			<div className='card-body'>
				<p className='card-text'>Quick example of some text</p>
			</div>
		</div>
	);
}
