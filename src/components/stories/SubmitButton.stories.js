import React from 'react';
import { SubmitButton } from '../Button/SubmitButton.styled';

export default {
	title: 'Components/SubmitButton',
	component: SubmitButton,
	decorators: [
		Story => {
			return (
				<div style={{ padding: '3em', maxWidth: '400px', position: 'relative' }}>
					<Story />
				</div>
			);
		},
	],
};

const ButtonText = 'Submit';

export function Default() {
	return <SubmitButton>{ButtonText}</SubmitButton>;
}
