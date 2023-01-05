import React from 'react';
import { Container } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Maintext() {
	return (
		<Container className='border-0'>
			<Row>
				<Col>
					<h1 className='text-center'>Welcome to Gym-Record </h1>
					<h3 className='text-center'>
						The last training tracker you will need!{' '}
					</h3>
				</Col>
			</Row>
			<Row>
				<Col>
					<h3 className='text-center'>Track Your Training </h3>
					<h3 className='text-center'>Build Muscle</h3>
					<h3 className='text-center'>Get Strong</h3>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4>Save Time </h4>
					<FontAwesomeIcon icon={'fa-heart'} />
				</Col>
				<Col>
					<h4>No more Pen & Paper </h4>
				</Col>
				<Col>
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
				<Col className='border'>
					<Carousel>
						<Carousel.Item>
							<div>
								<p>
									"Gym-Record means that I don't have to think about what
									weights I'm meant to use. I feel stronger after 1 week"
								</p>
								<p>- James </p>
							</div>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<div>
								<p>
									"Gym-Record means that I don't have to think about what
									weights I'm meant to use. I feel stronger after 1 week"
								</p>
								<p>- Bob </p>
							</div>
							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<div>
								<p>
									"Gym-Record means that I don't have to think about what
									weights I'm meant to use. I feel stronger after 1 week"
								</p>
								<p>- Jack </p>
							</div>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
}
