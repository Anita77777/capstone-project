import { useForm } from 'react-hook-form';
import { Container, Formcomment, Formfield, Label, LabelRadio } from '../UI/FormStyled/Form.styled';
import { SubmitButton } from '../UI/ButtonStyled/SubmitButton.styled';
import useStore from '../useStore/useStore';
import { Fieldset } from '../UI/ButtonStyled/RadioButtonstyled';
import Bookmark from '../Button/BookmarkButton';

export default function Form() {
	const addNewBook = useStore(state => state.addNewBook);
	const bookmarkStatus = useStore(state => state.bookmarkStatus);
	const updateBookmark = useStore(state => state.updateBookmark);

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
			<form onSubmit={handleSubmit(onSubmit)}>
				<Label>Author</Label>
				<Formfield
					aria-invalid={errors.name ? 'true' : 'false'}
					{...register('author', { required: true, maxLength: 30 })}
					required
					name="author"
					type="text"
					id="author"
					autoComplete="off"
				/>

				<Label>Booktitle</Label>
				<Formfield
					aria-invalid={errors.name ? 'true' : 'false'}
					{...register('title', { required: true, maxLength: 30 })}
					required
					name="title"
					type="text"
					id="title"
					autoComplete="off"
				/>

				<Label>Comment</Label>
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
				<Bookmark />

				<SubmitButton type="submit">submit</SubmitButton>
			</form>
		</Container>
	);
}
