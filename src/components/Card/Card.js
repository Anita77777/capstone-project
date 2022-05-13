import { useImmer } from 'use-immer';
import React, { useEffect } from 'react';
import { saveToLocal, loadFromLocal } from '../../lib/localStorage';
import List from '../List/List';
import Form from '../Form/Form';

export default function Card() {
	const [authors, updateAuthors] = useImmer(loadFromLocal('authors') ?? []);

	useEffect(() => {
		saveToLocal('authors', authors);
		updateAuthors(loadFromLocal('authors'));
	}, [authors]);

	return (
		<>
			<Form updateAuthors={updateAuthors} />
			<List authors={authors} updateAuthors={updateAuthors} />
		</>
	);
}
