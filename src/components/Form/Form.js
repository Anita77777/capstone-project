import { useForm } from 'react-hook-form';
import { Container, Formcomment, Formfield, Label } from './Form.styled';
import { SubmitButton } from '../Button/SubmitButton.styled';
import useStore, { useHydration } from '../useStore/useStore';
import { Fieldset, LabelRadio } from '../Button/RadioButtonstyled';
import Bookmark from '../Button/BookmarkButton';
import SearchBar from '../SearchBar/SearchBar';

export default function Form() {
	const addNewBook = useStore(state => state.addNewBook);
	const bookmarkStatus = useStore(state => state.bookmarkStatus);
	const updateBookmark = useStore(state => state.updateBookmark);
	const chosenEntry = useStore(state => state.chosenEntry);
	const hydrated = useHydration();

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
				<Label htmlFor="Author">Author</Label>
				<Formfield
					aria-invalid={errors.name ? 'true' : 'false'}
					{...register('author', { required: true, maxLength: 30 })}
					required
					readOnly
					name="author"
					value={(hydrated && chosenEntry?.author) ?? ''}
					type="text"
					id="author"
					autoComplete="off"
				/>

				<Label htmlFor="Booktitle">Booktitle</Label>
				<Formfield
					aria-invalid={errors.name ? 'true' : 'false'}
					{...register('title', { required: true, maxLength: 30 })}
					required
					readOnly
					name="title"
					value={(hydrated && chosenEntry?.title) ?? ''}
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
			</form>
		</Container>
	);
}
