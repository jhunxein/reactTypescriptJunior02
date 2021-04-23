import React from 'react';

import Reviews from './Reviews';
import img from './../../assets/images/illustration-2.svg';

import './../../css/main/stayProductive.css';

import arrow from './../../assets/images/icon-arrow.svg';

function StayProductive() {
	return (
		<section className="productive">
			<div className="productive--design">
				<div className="productive__imgBg"></div>
			</div>
			<div className="productive--wrapper">
				<div className="container">
					<div className="productive--container">
						<h2>Stay productive, wherever you are</h2>
						<p>
							Never let location be an issue when accessing your files. Fylo has you
							covered for all of your file storage needs.
						</p>
						<p>
							Securely share files and folders with friends, family and colleagues for
							live collaboration. No email attachments required!
						</p>
						<div className="btn--wrapper">
							<a href="/" className="btn btn__productive">
								See how Fylo works
								<img src={arrow} alt="" className="btn__arrow" />
							</a>
						</div>

						<Reviews />
					</div>
					<div className="productive--illustration">
						<img src={img} alt="Productive Illustration" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default StayProductive;
