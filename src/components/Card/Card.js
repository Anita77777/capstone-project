import useStore from '../useStore/useStore';
import { CardContainer } from '../Form/Form.styled';

export default function Card() {
	const newBook = useStore(state => state.newBook);
	return (
		<ul>
			{newBook.map(book => {
				return (
					<CardContainer key={book.id}>
						<li>
							<p>Author: {book.author}</p>
							<p>Title: {book.title}</p>
							<p>{book.comment}</p>
						</li>
					</CardContainer>
				);
			})}
		</ul>
	);
}
