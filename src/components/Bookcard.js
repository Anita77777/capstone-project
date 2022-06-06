import useStore, { useHydration } from '../components/useStore/useStore';
import { useState } from 'react';

export default function BookSearch() {
	const [searchTerm, setSearchTerm] = useState('');
	const books = useStore(state => state.books);
	const fetchBooks = useStore(state => state.fetchBooks);
	const chooseEntry = useStore(state => state.chooseEntry);
	const hydrated = useHydration();

	const handleChange = event => {
		setSearchTerm(event.target.value);
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
					<input
						type="search"
						placeholder="search for book"
						value={searchTerm}
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Search</button>

				<ul>
					{hydrated &&
						books.items.map(book => {
							return (
								<li
									key={book.id}
									onClick={() => {
										console.log('click', book.id);
										chooseEntry(book.id);
									}}
								>
									{book.volumeInfo.title}
									{book.volumeInfo.authors}
								</li>
							);
						})}
				</ul>
			</form>
		</section>
	);
}
