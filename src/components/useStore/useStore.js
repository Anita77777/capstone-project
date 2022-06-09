import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';
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
							id: nanoid(),
							author: books.author,
							title: books.title,
							comment: books.comment,
							selection: books.selection,
							series: books.series,
							bookmarkStatus: books.bookmarkStatus,
							image: books.image,
						},
					],
				})),

			books: { items: [] },
			fetchBooks: async searchTerm => {
				const result = await axios.get(
					`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
				);
				set({ books: { items: result.data.items.slice(0, 3) } });
			},

			bookItems: searchTerm => {
				set(state => {
					return {
						foundEntrys: state.items.filter(
							book =>
								Object.values(book).filter(value =>
									value.includes.toLowerCase(searchTerm)
								).length > 0
						),
					};
				});
			},

			foundEntrys: [],
			chosenEntry: null,
			chooseEntry: id => {
				set(state => {
					console.log(id);
					console.log(state.books.items.find(book => book.id === id));

					return {
						chosenEntry: state.books.items.find(book => book.id === id),
					};
				});
			},

			resetChosenEntry: () => set({ chosenEntry: null }),

			searchTerm: '',
			setSearchTerm: value => set({ searchTerm: value }),

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
			//partialize: state => Object.fromEntries(Object.entries(state).filter(() => false)),
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
