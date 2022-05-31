import useStore from '../useStore/useStore';
import { CardContainer } from './Cards.styled';

export default function Cards({ bookmarkStatus }) {
	const newBooks = useStore(state => state.newBooks);
	const deleteBook = useStore(state => state.deleteBook);
	const controlEdit = useStore(state => state.controlEdit);
	const editComment = useStore(state => state.editComment);

	const booksToRender = newBooks.filter(newBook => newBook.bookmarkStatus === bookmarkStatus);

	return (
		<ul>
			{booksToRender.map(books => {
				return (
					<CardContainer key={books.id}>
						<li>
							<p>{books.bookmarkStatus}</p>
							<p>Author: {books.author}</p>
							<p>Title: {books.title}</p>
							{books.edit ? (
								<input
									type="text"
									value={books.comment}
									onChange={event => {
										controlEdit(books.id, event.target.value);
									}}
								/>
							) : (
								<span>{books.comment}</span>
							)}
							<p>{books.selection}</p>
							<p>{books.edit}</p>

							<button
								type="button"
								variant="delete"
								onClick={() => {
									deleteBook(books.id);
								}}
							>
								Delete
							</button>

							<button
								type="button"
								variant="edit"
								onClick={() => {
									editComment(books.id);
								}}
							>
								{books.edit ? 'Save' : 'Edit'}
							</button>
						</li>
					</CardContainer>
				);
			})}
		</ul>
	);
}
