import { useState } from 'react';
import useStore from '../useStore/useStore';

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');
	const findEntry = useStore(state => state.findEntry);
	const foundEntrys = useStore(state => state.foundEntrys);
	console.log(foundEntrys);

	return (
		<section>
			<form
				onSubmit={event => {
					event.preventDefault();
					findEntry(searchTerm);
				}}
			>
				<label>
					Search for books{' '}
					<input
						type="search"
						placeholder="search for book"
						value={searchTerm}
						onChange={event => {
							setSearchTerm(event.target.value);
						}}
					/>
				</label>
				<button type="submit">Search</button>
			</form>
		</section>
	);
}
