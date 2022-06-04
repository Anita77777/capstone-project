import useStore from '../useStore/useStore';
import { CardContainer, WrapperComment, CardWrapper } from '../UI/CardsStyled/Cards.styled';
import Typography from '../UI/Typography/Typography';

import { Button } from '../UI/ButtonStyled/Button.styled';

export default function Cards({ bookmarkStatus }) {
	const newBooks = useStore(state => state.newBooks);
	const deleteBook = useStore(state => state.deleteBook);
	const controlEdit = useStore(state => state.controlEdit);
	const editComment = useStore(state => state.editComment);

	const booksToRender = newBooks.filter(newBook => newBook.bookmarkStatus === bookmarkStatus);

	return (
		<CardWrapper>
			{booksToRender.map(books => {
				return (
					<CardContainer key={books.id}>
						<Typography variant="h2">Author: {books.author}</Typography>
						<Typography variant="h3">Title: {books.title}</Typography>
						{books.edit ? (
							<WrapperComment
								type="text"
								value={books.comment}
								onChange={event => {
									controlEdit(books.id, event.target.value);
								}}
							/>
						) : (
							<Typography variant="span">{books.comment}</Typography>
						)}
						<Typography variant="p">{books.selection}</Typography>
						<Typography variant="p">{books.edit}</Typography>

						<Button
							type="button"
							variant="edit"
							onClick={() => {
								editComment(books.id);
							}}
						>
							{books.edit ? 'Save' : 'Edit'}
						</Button>

						<Button
							type="button"
							variant="delete"
							onClick={() => {
								deleteBook(books.id);
							}}
						>
							Delete
						</Button>
					</CardContainer>
				);
			})}
		</CardWrapper>
	);
}
