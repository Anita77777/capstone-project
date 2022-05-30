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

		books: { items: [] },
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
