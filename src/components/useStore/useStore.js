import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const useStore = create(
	persist(set => ({
		newBooks: [],
		addNewBook: books =>
			set(state => ({
				newBooks: [
					...state.newBooks,
					{
						author: books.author,
						title: books.title,
						selection: books.selection,
						series: books.series,
						bookmarkStatus: books.bookmarkStatus,
						comment: books.comment,
					},
				],
			})),

		entries: [
			{ author: 'Mariana Zapata', title: 'Luna and the lie' },
			{ author: 'Charlotte Bronte', title: 'Jane Eyre' },
			{ author: 'Saffron A. Kent', title: 'Unrequited' },
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

		chooseEntry: foundEntrys => {
			set(state => {
				return {
					chosenEntrys: state.foundEntrys.filter(
						entry =>
							Object.values(entry).filter(value => value.includes(foundEntrys))
								.length > 0
					),
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
	}))
);

export default useStore;
