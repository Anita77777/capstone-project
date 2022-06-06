import { useForm } from 'react-hook-form';
import { Container } from '../Form/Form.styled.js';
import useStore from '../useStore/useStore';
import { Fieldset, LabelRadio, WrapperFieldset } from '../Button/RadioButtonstyled';
import Bookmark from '../Button/BookmarkButton';
import { BookSearch } from '../Bookcard';

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
			<BookSearch />
			<form onSubmit={handleSubmit(onSubmit)}>
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

				<button type="button" variant="submit">
					Add to library
				</button>
			</form>
		</Container>
	);
}
