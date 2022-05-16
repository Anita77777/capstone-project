import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import Form from '../Form/Form';

describe('Form', () => {
	it('has three input fields and a submitbutton (Author, Booktitle, Comment, SubmitButton)', () => {
		render(<Form />);

		const inputAuthor = screen.getByLabelText('Author:');
		expect(inputAuthor).toBeRequired();
		const inputBooktitle = screen.getByLabelText('Booktitle:');
		expect(inputBooktitle).toBeRequired();
		const textfieldComment = screen.getByLabelText('Comment:');
		expect(textfieldComment).toBeRequired();
		const buttonSubmit = screen.getAllByRole('SubmitButton');
		const SubmitButton = buttonSubmit;
		userEvent.click(SubmitButton);

		expect(inputAuthor).toBeInTheDocument();
		expect(inputBooktitle).toBeInTheDocument();
		expect(textfieldComment).toBeInTheDocument();
		expect(SubmitButton).toBeInTheDocument();
	});

	it('renders a card with the input data from form');
	render(<Form />);
});
