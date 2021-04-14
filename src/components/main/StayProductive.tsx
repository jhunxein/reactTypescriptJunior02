import React from 'react';

import Reviews from './Reviews';

function StayProductive() {
	return (
		<section>
			<h2>Stay productive, wherever you are</h2>
			<p>
				Never let location be an issue when accessing your files. Fylo has you
				covered for all of your file storage needs.
			</p>
			<p>
				Securely share files and folders with friends, family and colleagues for
				live collaboration. No email attachments required!
			</p>

			<Reviews />

			<a href="/">See how Fylo works</a>
		</section>
	);
}

export default StayProductive;
