import useStore from '../useStore/useStore';
import { CardContainer } from '../Card/Card.styled';

export default function Card() {
	const newBooks = useStore(state => state.newBooks);
	const deleteBook = useStore(state => state.deleteBook);

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
							<button
								type="button"
								variant="delete"
								onClick={() => {
									deleteBook(books.id);
								}}
							>
								Delete
							</button>
						</li>
					</CardContainer>
				);
			})}
		</ul>
	);
}
