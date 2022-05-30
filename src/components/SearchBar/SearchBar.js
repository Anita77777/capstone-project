/* eslint-disable react/jsx-child-element-spacing */
import { useState } from 'react';
import useStore from '../useStore/useStore';

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');
	const fetchBooks = useStore(state => state.fetchBooks);
	const books = useStore(state => state.books);

	const onChange = event => {
		setSearchTerm(event.target.value);
	};

	const onSearch = searchTerm => {
		setSearchTerm(searchTerm);
	};

	return (
		<section>
			<form
				onSubmit={event => {
					event.preventDefault();
					fetchBooks(searchTerm);
				}}
			>
				<label>
					Search for book
					<input
						type="search"
						placeholder="search for book"
						value={searchTerm}
						onChange={onChange}
					/>
				</label>

				{books.items
					.filter(book => {
						const bookTitle = searchTerm.toLowerCase();

						return (
							searchTerm &&
							bookTitle.startsWith(searchTerm) &&
							bookTitle !== searchTerm
						);
					})
					.slice(0, 20)
					.map(book => (
						<li key={book.id} onClick={() => onSearch(book.volumeInfo.title)}>
							{book.volumeInfo.title}
						</li>
					))}
				<button type="button" onClick={() => onSearch(searchTerm)}>
					Search
				</button>
			</form>
		</section>
	);
}
