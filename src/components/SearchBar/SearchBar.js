import { useState } from 'react';

import useStore, { useHydration } from '../useStore/useStore';

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');
	const findEntry = useStore(state => state.findEntry);
	const foundEntrys = useStore(state => state.foundEntrys);
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
					{hydrated &&
						foundEntrys.map(entry => (
							<li
								key={entry.id}
								onClick={() => {
									console.log('click', entry.id);
									chooseEntry(entry.id);
								}}
							>
								{entry.author}:{entry.title}
							</li>
						))}
				</ul>
			</form>
		</section>
	);
}
