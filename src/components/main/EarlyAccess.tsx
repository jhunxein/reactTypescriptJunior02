import React from 'react';

import Form from './../helpers/Form';

function EarlyAccess() {
	return (
		<section>
			<h2>Get eraly access today</h2>
			<p>
				It only takes a minute to sign up and our free starter tier is extremely
				generous. If you havee any questions, our support team would be happy to
				help you.
			</p>
			<Form
				fields={[
					{
						label: 'Email Address',
						inputType: 'email',
						inputName: 'email',
						inputID: 'email',
						inputPlaceholder: 'email@example.com',
						inputClasses: 'input__max',
					},
				]}
				buttonText="Get Started for Free"
				buttonClasses="btn btn__max"
			/>
		</section>
	);
}

export default EarlyAccess;
