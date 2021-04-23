import React from 'react';

import phone from './../../assets/images/icon-phone.svg';
import email from './../../assets/images/icon-email.svg';

function Address() {
	return (
		<address className="container address">
			<div>
				<img src={phone} alt="" aria-hidden className="inline__icon" />
				Phone: +1-543-123-4567
			</div>
			<div>
				<img src={email} alt="" aria-hidden className="inline__icon" />
				<a href="mailto:example@fylo.com" className="footer__emailTo">
					example@fylo.com
				</a>
			</div>
		</address>
	);
}

export default Address;
