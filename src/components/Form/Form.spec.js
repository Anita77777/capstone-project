import { render, screen } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom';

describe('Form', () => {
	it('renders two input fields, one Textarea and a submit button', () => {
		render(<Form />);

		const Author = screen.getByLabelText(/Author/i);
		const BookTitle = screen.getByLabelText(/Booktitle/i);
		const Notes = screen.getByLabelText(/Notes/i);
		const submitButton = screen.getByRole('group', {
			name: /Add to library:/i,
		});

		expect(Author).toBeInTheDocument();
		expect(BookTitle).toBeInTheDocument();
		expect(Notes).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});
});
