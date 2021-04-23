import './../../css/main/access.css';

import FormEmail from './../FormEmail';

function EarlyAccess() {
	return (
		<section className="container--fluid access">
			<div className="container">
				<div>
					<h2>Get early access today</h2>
					<p>
						It only takes a minute to sign up and our free starter tier is extremely
						generous. If you havee any questions, our support team would be happy to
						help you.
					</p>
				</div>

				<FormEmail
					{...{
						labelTxt: 'Email Address',
						inputType: 'email',
						inputNameID: 'emailAccess',
						inputPlaceholder: 'example@gmail.com',
						inputClasses: 'shadow-flat access__email',
						btnTxt: 'Get Started for Free',
						btnClasses: 'btn btn--primary shadow-y btn__access',
					}}
				/>
			</div>
		</section>
	);
}

export default EarlyAccess;
