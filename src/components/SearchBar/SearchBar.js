import { useState } from 'react';
import useStore from '../useStore/useStore';

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');
	const findEntry = useStore(state => state.findEntry);
	const foundEntrys = useStore(state => state.foundEntrys);
	const chooseEntry = useStore(state => state.chooseEntry);

	const handleChange = event => {
		setSearchTerm(event.target.value);
	};
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
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Search</button>

				<ul>
					{foundEntrys.map(entry => (
						<li
							key={entry.id}
							author={entry.author}
							title={entry.title}
							onClick={() => {
								chooseEntry(entry.id);
							}}
						/>
					))}
				</ul>
			</form>
		</section>
	);
}
