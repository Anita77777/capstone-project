import { useForm } from 'react-hook-form';
import { Container, Formcomment, Formfield, Label, WrapperButtonForm } from '../UI/Form.styled';
import useStore from '../useStore/useStore';
import { Fieldset, LabelRadio, WrapperFieldset } from '../UI/ButtonStyled/RadioButtonstyled';
import Bookmark from '../Button/BookmarkButton';
import { Button } from '../UI/ButtonStyled/Button.styled';
import Bookresults from '../Bookresults/Bookresults';
import { useEffect } from 'react';

export default function Form() {
	const addNewBook = useStore(state => state.addNewBook);
	const bookmarkStatus = useStore(state => state.bookmarkStatus);
	const updateBookmark = useStore(state => state.updateBookmark);
	const chosenEntry = useStore(state => state.chosenEntry);
	const resetChosenEntry = useStore(state => state.resetChosenEntry);
	const setSearchTerm = useStore(state => state.setSearchTerm);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		setValue,
	} = useForm();

	const onSubmit = books => {
		addNewBook({
			...books,
			bookmarkStatus,
			image: chosenEntry
				? `http://books.google.com/books/content?id=${chosenEntry.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`
				: null,
		});
		reset();
		resetChosenEntry();
		updateBookmark(null);
		setSearchTerm('');
	};

	useEffect(() => {
		if (chosenEntry) {
			setValue('author', chosenEntry.volumeInfo.authors);
			setValue('title', chosenEntry.volumeInfo.title);
		}
	}, [chosenEntry, setValue]);

	return (
		<Container>
			<Bookresults />

			<form onSubmit={handleSubmit(onSubmit)}>
				<Label>Author</Label>
				<Formfield
					aria-invalid={errors.name ? 'true' : 'false'}
					{...register('author', { required: true })}
					required
					name="author"
					type="text"
					id="author"
					placeholder="Add the Auhor's name here"
					autoComplete="off"
				/>

				<Label>Booktitle</Label>
				<Formfield
					aria-invalid={errors.name ? 'true' : 'false'}
					{...register('title', { required: true, pattern: /\S(.*\S)?/ })}
					required
					name="title"
					type="text"
					id="title"
					placeholder="Add the title here"
					autoComplete="off"
				/>

				<Label>Notes</Label>
				<Formcomment
					aria-invalid={errors.Comment ? 'true' : 'false'}
					{...register('comment', { required: true, pattern: /\S(.*\S)?/ })}
					required
					name="comment"
					type="text"
					id="comment"
					placeholder="Insert your notes, key details and scenes here"
					autoComplete="off"
				/>
				<WrapperFieldset>
					<Fieldset
						aria-invalid={errors.selection ? 'true' : 'false'}
						{...register('selection', { required: true, pattern: /\S(.*\S)?/ })}
					>
						<input
							{...register('selection')}
							name="selection"
							type="radio"
							id="standalone"
							value="standalone"
						/>
						<LabelRadio>Standalone</LabelRadio>

						<input
							{...register('selection')}
							name="selection"
							type="radio"
							id="series"
							value="series"
						/>
						<LabelRadio>Series</LabelRadio>
					</Fieldset>
				</WrapperFieldset>
				<Bookmark />
				<WrapperButtonForm>
					<Button type="submit" variant="submit">
						Add to library
					</Button>
				</WrapperButtonForm>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</form>
		</Container>
	);
}
