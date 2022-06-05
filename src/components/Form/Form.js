import { useForm } from 'react-hook-form';
import { Container, Formcomment, Formfield, Label } from '../UI/FormStyled/Form.styled';
import useStore from '../useStore/useStore';
import { Fieldset, LabelRadio, WrapperFieldset } from '../UI/ButtonStyled/RadioButtonstyled';
import Bookmark from '../Button/BookmarkButton';
import { Button } from '../UI/ButtonStyled/Button.styled';

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
					placeholder="Add the Auhor's name here"
					autoComplete="off"
				/>

				<Label>Booktitle</Label>
				<Formfield
					aria-invalid={errors.name ? 'true' : 'false'}
					{...register('title', { required: true, pattern: /\S(.*\S)?/, maxLength: 30 })}
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

				<Button type="submit" variant="submit">
					Add to library
				</Button>
			</form>
		</Container>
	);
}
