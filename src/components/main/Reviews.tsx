import React from 'react';

import './../../css/main/reviews.css';
import quote from './../../assets/images/icon-quotes.svg';
import user from './../../assets/images/avatar-testimonial.jpg';

const Reviews = () => {
	return (
		<blockquote className="margin__bottom shadow-flat quote">
			<img src={quote} alt="" className="quote__img" aria-hidden />
			<p>
				Fylo has improved our team productivity by an order of magnitude. Since
				making the switch our team has become a well-oiled collaboration machine.
			</p>
			<div className="quote--wrapper">
				<img src={user} alt="" className="quote__user" />
				<cite>
					<span>Kyle Burton</span>Founder & CEO, huddle
				</cite>
			</div>
		</blockquote>
	);
};

export default Reviews;
