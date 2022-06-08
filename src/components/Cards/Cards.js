import useStore from '../useStore/useStore';
import {
	WrapperComment,
	WrapperButton,
	LinkGood,
	WrapperImage,
	WrapperTitleCard,
	CardWrapper,
} from '../UI/Cards.styled';
import Typography from '../UI/Typography/Typography';
import Image from 'next/image';
import { Button } from '../UI/ButtonStyled/Button.styled';

export default function Cards({ bookmarkStatus }) {
	const newBooks = useStore(state => state.newBooks);
	const deleteBook = useStore(state => state.deleteBook);
	const controlEdit = useStore(state => state.controlEdit);
	const editComment = useStore(state => state.editComment);

	const booksToRender = newBooks.filter(newBook => newBook.bookmarkStatus === bookmarkStatus);

	return (
		<div>
			{booksToRender.map(books => {
				return (
					<CardWrapper key={books.id}>
						<WrapperImage>
							<WrapperTitleCard>
								<Typography variant="h3">{books.title}</Typography>

								<Typography variant="h4">{books.author}</Typography>
							</WrapperTitleCard>
							{books.image && (
								<Image
									width={90}
									height={120}
									alt={`${books.title} book`}
									src={books.image}
								/>
							)}
						</WrapperImage>
						{books.edit ? (
							<WrapperComment
								type="text"
								maxLength={100}
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
						<WrapperButton>
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

							<LinkGood
								href="https://www.goodreads.com"
								aria-label="Link to Goodreads"
							>
								<Button type="button" variant="Goodreads">
									Goodreads
								</Button>
							</LinkGood>
						</WrapperButton>
					</CardWrapper>
				);
			})}
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
	);
}
