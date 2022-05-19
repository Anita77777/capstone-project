import { useForm } from 'react-hook-form';
import { Container, Formcomment, Formfield, Label } from './Form.styled';
import { SubmitButton } from '../Button/SubmitButton.styled';
import useStore from '../useStore/useStore';
import { Fieldset, LabelRadio } from '../Button/RadioButtonstyled';

export default function Form() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = book => {
		addNewBook(book);
		reset();
	};

	const addNewBook = useStore(state => state.addNewBook);

	return (
		<Container>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Label htmlFor="Author">Author</Label>
				<Formfield
					aria-invalid={errors.name ? 'true' : 'false'}
					{...register('author', { required: true, maxLength: 30 })}
					required
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
					name="title"
					type="text"
					id="title"
					autoComplete="off"
				/>

				<Label htmlFor="Comment">Comment</Label>
				<Formcomment
					aria-invalid={errors.Comment ? 'true' : 'false'}
					{...register('comment', { required: true, maxLength: 100 })}
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

				<SubmitButton type="submit">submit</SubmitButton>
			</form>
		</Container>
	);
}
