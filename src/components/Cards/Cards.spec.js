import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import '@testing-library/jest-dom';

describe('Cards', () => {
	it('renders three strings', () => {
		render(<Cards Author="" Title="" Comment="" />);

		const Author = screen.getByText(/""/i);
		const Title = screen.getByText(/"/i);
		const Comment = screen.getByText(/""/i);

		expect(Author).toBeInTheDocument();
		expect(Title).toBeInTheDocument();
		expect(Comment).toBeInTheDocument();
	});
});
