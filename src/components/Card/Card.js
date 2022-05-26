import useStore from '../useStore/useStore';
import { CardContainer } from './Card.styled';

export default function Card() {
	const newBooks = useStore(state => state.newBooks);
	const deleteBook = useStore(state => state.deleteBook);
	const editCard = useStore(state => state.editCard);

	return (
		<ul>
			{newBooks.map(books => {
				return (
					<CardContainer key={books.id}>
						<li>
							<p>{books.bookmarkStatus}</p>
							<p>Author: {books.author}</p>
							<p>Title: {books.title}</p>
							<p>{books.comment}</p>
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
									editCard(books.id);
								}}
							>
								{editCard ? 'Save' : 'Edit'}
							</button>
						</li>
					</CardContainer>
				);
			})}
		</ul>
	);
}
