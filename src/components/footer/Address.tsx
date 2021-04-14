import React from 'react';

import logo from './../../assets/images/logo.svg';
import phone from './../../assets/images/icon-phone.svg';
import email from './../../assets/images/icon-email.svg';

function Address() {
	return (
		<div>
			<img src={logo} alt="Fylo" />
			<address>
				<div>
					<img src={phone} alt="" aria-hidden />
					Phone: +1-543-123-4567
				</div>
				<div>
					<img src={email} alt="" aria-hidden />
					example@fylo.com
				</div>
			</address>
		</div>
	);
}

export default Address;
