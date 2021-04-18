import React from 'react';

import Form from './../helpers/Form';
import './../../css/main/access.css';

function EarlyAccess() {
	return (
		<section className="access">
			<div className="container">
				<h2>Get early access today</h2>
				<p>
					It only takes a minute to sign up and our free starter tier is extremely
					generous. If you havee any questions, our support team would be happy to
					help you.
				</p>
				<div className="form--wrapper">
					<Form
						fields={[
							{
								label: 'Email Address',
								inputType: 'email',
								inputName: 'email',
								inputID: 'email',
								inputPlaceholder: 'email@example.com',
								inputClasses: 'shadow-flat access__input',
							},
						]}
						buttonText="Get Started for Free"
						buttonClasses="btn shadow-y btn--primary btn__max"
					/>
				</div>
			</div>
		</section>
	);
}

export default EarlyAccess;
