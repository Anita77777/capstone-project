import React from 'react';
import { SubmitButton } from '../UI/ButtonStyled/SubmitButton.styled';

export default {
	title: 'Components/SubmitButton',
	component: SubmitButton,
	decorators: [
		Story => {
			return (
				<div>
					<Story />
				</div>
			);
		},
	],
};

const ButtonText = 'Submit';

export function Submit() {
	return <SubmitButton>{ButtonText}</SubmitButton>;
}
