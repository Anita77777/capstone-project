import { render, screen } from '@testing-library/react';
import Form from '../Form/Form';
import { Formfield } from './Form.styled';

describe('Form', () => {
	it('renders a label and an input', () => {
		render(<Form text="Author" placeholder="Add Author" />);
		render(<Form text="Booktitle" placeholder="Add Booktitle" />);
		render(<Form text="Comment" placeholder="Add your Comment" />);

		const form = screen.getByLabelText('Form');
		expect(Formfield).toBeRequired();

		expect(form).toHaveAttribute('placeholder', 'Add Author');
		expect(form).toHaveAttribute('placeholder', 'Add Booktitle');
		expect(form).toHaveAttribute('placeholder', 'Add your Comment');
		expect(form).toHaveAttribute('text', 'Author');
		expect(form).toHaveAttribute('text', 'Booktitle');
		expect(form).toHaveAttribute('text', 'Comment');
	});
});
