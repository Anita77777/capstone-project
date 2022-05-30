import useStore from '../useStore/useStore';
import { CardContainer } from '../Card/Card.styled';
import Image from 'next/Image';

export default function Card() {
	const newBooks = useStore(state => state.newBooks);
	const deleteBook = useStore(state => state.deleteBook);
	const controlEdit = useStore(state => state.controlEdit);
	const editComment = useStore(state => state.editComment);

	return (
		<ul>
			{newBooks.map(books => {
				return (
					<CardContainer key={books.id}>
						<li>
							<p>{books.bookmarkStatus}</p>
							<p>Author: {books.author}</p>
							<p>Title: {books.title}</p>
							<Image
								alt={`${book.volumeInfo.title} book`}
								src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
							/>

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
