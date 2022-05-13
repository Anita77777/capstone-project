import { render, screen } from '@testing-library/react';
import Form from '../Form/Form';

describe('Form', () => {
	it('renders a label and an input', () => {
		render(<Form labelText="author" placeholder="Add author here" name="author" />);
		render(<Form labelText="title" placeholder="Add booktitle here" name="title" />);
		render(<Form labelText="comment" placeholder="leave a comment here" name="comment" />);

		const form1 = screen.getByLabelText('author');

		expect(form1).toHaveAttribute('placeholder', 'Add author here');
		expect(form1).toHaveAttribute('name', 'author');

		const form2 = screen.getByLabelText('title');

		expect(form2).toHaveAttribute('placeholder', 'Add booktitle here');
		expect(form2).toHaveAttribute('name', 'title');

		const form3 = screen.getByLabelText('comment');

		expect(form3).toHaveAttribute('placeholder', 'Add a comment here');
		expect(form3).toHaveAttribute('name', 'comment');
	});
});
