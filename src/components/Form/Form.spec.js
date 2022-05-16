import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import Form from '../Form/Form';
import '@testing-library/jest-dom';

describe('Form', () => {
	it('render two input fields, one textfield, one submitbutton and one card', () => {
		render(<Form />);

		const inputAuthor = screen.getByText('Author:');
		const inputBooktitle = screen.getByText('Booktitle:');
		const textfieldComment = screen.getByText('Comment:');
		const buttonSubmit = screen.getAllByRole('SubmitButton');
		const SubmitButton = buttonSubmit;
		userEvent.click(SubmitButton);
		const CardContainer = screen.getAllByRole('CardContainer');

		expect(inputAuthor).toBeInTheDocument();
		expect(inputBooktitle).toBeInTheDocument();
		expect(textfieldComment).toBeInTheDocument();
		expect(SubmitButton).toBeInTheDocument();
		expect(CardContainer).toBeInTheDocument = CardContainer();
	});
});
