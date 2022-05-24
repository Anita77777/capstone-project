import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
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
					},
				],
			})),

		deleteBook: id => {
			set(state => {
				return {
					newBooks: state.newBooks.filter(books => books.id !== id),
				};
			});
		},
		bookmarkStatus: '',
		updateBookmark: status => {
			set({ bookmarkStatus: status });
		},
	}))
);

export default useStore;
