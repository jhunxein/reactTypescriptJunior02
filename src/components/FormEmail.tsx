import * as React from 'react';

import { FaExclamationCircle } from 'react-icons/fa';

interface FormEmailInterface {
	labelTxt: string;
	inputNameID: string;
	inputClasses: string;
	inputPlaceholder: string;
	btnTxt: string;
	btnClasses: string;
}

function FormEmail(props: FormEmailInterface) {
	const [emailField, setEmailField] = React.useState('');
	const [isEmailError, setIsEmailError] = React.useState(false);

	const {
		labelTxt,
		inputNameID,
		inputClasses,
		inputPlaceholder,
		btnTxt,
		btnClasses,
	} = props;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
		setEmailField(e.target.value);

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		console.log(e);
		if (!emailField) {
			return setIsEmailError(true);
		} else if (
			!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
				emailField
			)
		) {
			return setIsEmailError(true);
		}
		setEmailField('');
		setIsEmailError(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form--field">
				<div>
					<label htmlFor={inputNameID} className="hide--elem">
						{labelTxt}
					</label>
					<input
						type="email"
						name={inputNameID}
						id={inputNameID}
						placeholder={inputPlaceholder}
						className={`${
							isEmailError ? inputClasses + ' input__error' : inputClasses
						}`}
						value={emailField}
						onChange={handleChange}
					/>
					{isEmailError && <FaExclamationCircle className="error--icon__inline" />}
				</div>
				<p
					className={`${isEmailError ? 'text__error show__error' : 'text__error'}`}
				>
					Please input a valid email.
				</p>
			</div>

			<button type="submit" className={btnClasses}>
				{btnTxt}
			</button>
		</form>
	);
}

export default FormEmail;
