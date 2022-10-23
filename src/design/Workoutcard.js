import React from 'react';
import Card from 'react-bootstrap';

export default function WorkoutCard({ name, repsandsets, sets }) {
	return (
		<div
			className='card border-dark mb-3 text-center'
			style={{ width: '18 rem' }}
		>
			<div className='card-header'>Sample Card </div>
			<div className='card-body'>
				<div class='row'>
					<div className='col'>
						<div className='card-text'>
							<p>{name}</p>
						</div>
					</div>
					<div className='col'>
						<div className='card-text'>
							<p>{repsandsets}</p>
						</div>
					</div>
					<div className='col'>
						{/* <div className='card-text'>
							{sets &&
								sets.map((set) => {
									return (
										<div>
											<p>{set}</p>
										</div>
									);
								})}
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

/* <div class="container text-center">
<div class="row">
  <div class="col">
	card element 1
  </div>
  <div class="col">
	card element 2
  </div>
  <div class="col">
	card element 3
  </div>
</div>
<div class="row mt-2">
  <div class="col">
	card element 4
  </div>
  <div class="col">
	card element 5
  </div>
  <div class="col">
	card element 6
  </div>
</div>
</div> */
