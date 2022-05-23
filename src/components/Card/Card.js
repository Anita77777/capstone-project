import useStore from '../useStore/useStore';
import { CardContainer } from '../Card/Card.styled';

export default function Card() {
	const newBooks = useStore(state => state.newBooks);
	const deleteBooks = useStore(state => state.deleteBooks);

	return (
		<ul>
			{newBooks.map(books => {
				return (
					<CardContainer key={books.id}>
						<li>
							<p>Author: {books.author}</p>
							<p>Title: {books.title}</p>

							<p>{books.comment}</p>
							<p>{books.selection}</p>
							<button
								type="button"
								variant="delete"
								onClick={() => {
									deleteBooks(books.id);
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
