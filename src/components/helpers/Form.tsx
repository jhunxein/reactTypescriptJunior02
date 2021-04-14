import * as React from 'react';

import { UserInterface } from './interface';

const Form = (props: UserInterface) => {
	console.log(props);

	const { fields, buttonClasses, buttonText } = props;

	return (
		<form>
			{fields.map((field, index) => {
				const {
					label,
					inputType,
					inputName,
					inputID,
					inputPlaceholder,
					inputClasses,
				} = field;

				return (
					<div key={index} className="field">
						<label htmlFor={inputID} className="hide--elem">
							{label}
						</label>
						<input
							type={inputType}
							name={inputName}
							id={inputID}
							className={inputClasses}
							placeholder={inputPlaceholder}
						/>
					</div>
				);
			})}
			<button type="submit" className={buttonClasses}>
				{buttonText}
			</button>
		</form>
	);
};

export default Form;
