import { useForm } from 'react-hook-form';
import { Container, Formcomment, Formfield, Label } from './Form.styled';
import { SubmitButton } from '../Button/SubmitButton.styled';
import useStore from '../useStore/useStore';
import { Fieldset, LabelRadio } from '../Button/RadioButtonstyled';
import Bookmark from '../Button/BookmarkButton';
import SearchBar from '../SearchBar/SearchBar';

export default function Form() {
	const addNewBook = useStore(state => state.addNewBook);
	const bookmarkStatus = useStore(state => state.bookmarkStatus);
	const updateBookmark = useStore(state => state.updateBookmark);
	const books = useStore(state => state.books);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = book => {
		addNewBook({
			...book,
			bookmarkStatus,
		});
		reset();
		updateBookmark(null);
	};

	return (
		<Container>
			<SearchBar />
			<form onSubmit={handleSubmit(onSubmit)}>
				{books.items.map(book => {
					return (
						<div key={books.id}>
							<Label htmlFor="Author">Author</Label>
							<Formfield
								aria-invalid={errors.name ? 'true' : 'false'}
								{...register('author', { required: true, maxLength: 30 })}
								required
								value={book.volumeInfo.authors}
								name="author"
								type="text"
								id="author"
								autoComplete="off"
							/>
							<Label htmlFor="Booktitle">Booktitle</Label>
							<Formfield
								aria-invalid={errors.name ? 'true' : 'false'}
								{...register('title', { required: true, maxLength: 30 })}
								required
								value={book.volumeInfo.title}
								name="title"
								type="text"
								id="title"
								autoComplete="off"
							/>

							<Label htmlFor="Comment">Comment</Label>
							<Formcomment
								aria-invalid={errors.Comment ? 'true' : 'false'}
								{...register('comment', { required: true })}
								required
								name="comment"
								type="text"
								id="comment"
								autoComplete="off"
							/>
							<Fieldset
								aria-invalid={errors.selection ? 'true' : 'false'}
								{...register('selection', { required: true })}
							>
								<input
									{...register('selection')}
									name="selection"
									type="radio"
									id="standalone"
									value="standalone"
								/>
								<LabelRadio htmlFor="standalone">Standalone</LabelRadio>

								<input
									{...register('selection')}
									name="selection"
									type="radio"
									id="series"
									value="series"
								/>
								<LabelRadio htmlFor="series">Series</LabelRadio>
							</Fieldset>
							<Bookmark />
							<SubmitButton type="submit">submit</SubmitButton>
						</div>
					);
				})}
			</form>
		</Container>
	);
}
