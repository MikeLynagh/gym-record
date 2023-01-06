import React from 'react';
import { Container } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStopwatch,
	faClipboardList,
	faDumbbell,
} from '@fortawesome/free-solid-svg-icons';
export default function Maintext() {
	return (
		<Container className='border-0'>
			<Row>
				<hr
					style={{
						background: 'teal',
						color: 'teal',
						borderColor: 'teal',
						height: '3px',
					}}
				/>
			</Row>
			<Row className='text-center'>
				<Col>
					<h3>Track Your Workouts. Build Muscle. Get Strong. </h3>
				</Col>
			</Row>
			<Row className='text-center'>
				<Col>
					<FontAwesomeIcon
						icon={faStopwatch}
						className='fa-4x'
					></FontAwesomeIcon>
					<h4>Save Time </h4>
				</Col>
				<Col>
					<FontAwesomeIcon
						icon={faClipboardList}
						className='fa-4x'
					></FontAwesomeIcon>
					<h4>No more Pen & Paper </h4>
				</Col>
				<Col>
					<FontAwesomeIcon
						icon={faDumbbell}
						className='fa-4x'
					></FontAwesomeIcon>

					<h4>Focus on what matters most!</h4>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>Simple & Easy to Use. A few taps and your workout is saved. </p>
				</Col>
				<Col>
					Gym-record records your current workouts and lets you quickly access
					your old ones.{' '}
				</Col>
				<Col>
					In the gym, the most important part is lifting the weights. We get it.
					Don't waste energy. Choose the workout. Lift the recommended weights.
					Go home happy.{' '}
				</Col>
			</Row>
			<Row className='mb-5'>
				<hr
					style={{
						background: 'teal',
						color: 'teal',
						borderColor: 'teal',
						height: '3px',
					}}
				/>
				<Row>
					<Col>
						<h3 className='text-center'>See what people have to say.</h3>
					</Col>
				</Row>
				<Col className='border'>
					<Carousel>
						<Carousel.Item>
							<div>
								<p className='text-italic'>
									"Gym-Record means that I don't have to think about what
									weights I'm meant to use. I feel stronger after 1 week"
								</p>
								<p>- James </p>
							</div>
							<Carousel.Caption>
								<h3>- James </h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<div>
								<p className='text-italic'>
									"I can just focus on doing the workout Gym-record gives me.
									It's great. "
								</p>
								<p>- Jack</p>
							</div>
							<Carousel.Caption>
								<h3> - Jack </h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<div>
								<p className='text-italic'>
									" I like that it keeps challenging me"
								</p>
								<p>- Sarah </p>
							</div>

							<Carousel.Caption>
								<h3>- Sarah </h3>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
}
