import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(
		set => ({
			newBook: [],
			addNewBook: book =>
				set(state => ({
					newBook: [
						...state.newBook,
						{
							id: nanoid(),
							author: book.author,
							title: book.title,
							comment: book.comment,
						},
					],
				})),
		}),
		{ name: 'Readembr' }
	)
);

export default useStore;
