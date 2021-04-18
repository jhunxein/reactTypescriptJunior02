import React from 'react';

import Form from './../helpers/Form';
import img from './../../assets/images/illustration-1.svg';

import './../../css/main/hero.css';

function Hero() {
	return (
		<section className="container hero">
			<div className="hero--container">
				<h2>All your files in one secure location, accessible anywhere.</h2>
				<p>
					Fylo stores your most import files in one secure location. Access them
					wherever you need, share and collaborate with friends, family, and
					co-workers.
				</p>

				<Form
					fields={[
						{
							label: 'Email Address',
							inputType: 'email',
							inputName: 'email',
							inputID: 'email',
							inputPlaceholder: 'Enter your email..',
							inputClasses: 'shadow-flat hero__email',
						},
					]}
					buttonText="Get Started"
					buttonClasses="btn btn--primary shadow-y btn__hero"
				/>
			</div>
			<div className="hero--illustration">
				<img src={img} alt="Hero Illustration" />
			</div>
		</section>
	);
}
export default Hero;
