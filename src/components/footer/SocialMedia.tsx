import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function SocialMedia() {
	return (
		<div className="container ">
			<div className="social--icons">
				<a href="https://www.facebook.com" title="Visit our facebook page">
					<FaFacebookF className="social__white" />
				</a>

				<a href="https://www.twitter.com" title="Visit our twitter page">
					<FaTwitter className="social__white" />
				</a>

				<a href="https://www.instagram.com" title="Visit our instagram page">
					<FaInstagram className="social__white" />
				</a>
			</div>
		</div>
	);
}

export default SocialMedia;
