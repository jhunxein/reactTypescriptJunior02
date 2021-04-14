import React from 'react';

import Form from './../helpers/Form';

function Hero() {
	return (
		<section>
			<h1>All your files in one secure location, accessible anywhere.</h1>
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
						inputClasses: 'input__max',
					},
				]}
				buttonText="Get Started"
				buttonClasses="btn btn__max"
			/>
		</section>
	);
}
export default Hero;
