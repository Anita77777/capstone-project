import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { useState, useEffect } from 'react';

const useStore = create(
	persist(
		set => ({
			newBooks: [],
			addNewBook: books =>
				set(state => ({
					newBooks: [
						...state.newBooks,
						{
							selection: books.selection,
							series: books.series,
							bookmarkStatus: books.bookmarkStatus,
							comment: books.comment,
						},
					],
				})),

			entries: [
				{ author: 'Mariana Zapata', title: 'Luna and the lie', id: '1' },
				{ author: 'Charlotte Bronte', title: 'Jane Eyre', id: '2' },
				{ author: 'Saffron A. Kent', title: 'Unrequited', id: '3' },
			],

			findEntry: searchTerm => {
				set(state => {
					return {
						foundEntrys: state.entries.filter(
							entry =>
								Object.values(entry).filter(value => value.includes(searchTerm))
									.length > 0
						),
					};
				});
			},

			foundEntrys: [],
			chosenEntry: null,
			chooseEntry: id => {
				set(state => {
					return {
						chosenEntry: state.foundEntrys.find(entry => entry.id === id),
					};
				});
			},

			fetchBooks: async searchTerm => {
				const result = await axios.get(
					`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
				);
				set({ books: result.data });
			},

			editComment: id => {
				set(state => {
					return {
						newBooks: state.newBooks.map(books =>
							books.id === id
								? {
										...books,

										edit: !books.edit,
								  }
								: books
						),
					};
				});
			},

			deleteBook: id => {
				set(state => {
					return {
						newBooks: state.newBooks.filter(books => books.id !== id),
					};
				});
			},

			bookmarkStatus: null,
			updateBookmark: bookmarkStatus => {
				set({ bookmarkStatus });
			},

			controlEdit: (id, comment) => {
				set(state => {
					return {
						newBooks: state.newBooks.map(books =>
							books.id === id
								? {
										...books,

										comment,
								  }
								: books
						),
					};
				});
			},
		}),
		{
			name: 'Readembr',
			/*partialize: state => Object.fromEntries(Object.entries(state).filter(() => false)),*/
		}
	)
);

export default useStore;
export const useHydration = () => {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		const unsubFinishHydration = useStore.persist.onFinishHydration(() => setHydrated(true));

		setHydrated(useStore.persist.hasHydrated());

		return () => {
			unsubFinishHydration();
		};
	}, []);

	return hydrated;
};
