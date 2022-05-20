import { useForm } from 'react-hook-form';
import { Container, Formcomment, Formfield, Label, WrapperBookmark } from './Form.styled';
import { SubmitButton } from '../Button/SubmitButton.styled';
import useStore from '../useStore/useStore';
import { Fieldset, LabelRadio } from '../Button/RadioButtonstyled';
import MySVG from '../SVG/SVG';
import { useState } from 'react';
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
	const [bookmarkedLoved, setBookmarkedLoved] = useState(false);
	const [bookmarkedDisliked, setBookmarkedDisliked] = useState(false);
	const [bookmarkedRead, setBookmarkedRead] = useState(false);

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
				<WrapperBookmark>
					<article
						onClick={() => {
							setBookmarkedLoved(!bookmarkedLoved);
						}}
					>
						{bookmarkedLoved ? (
							<MySVG variant="heartFilled" color="red" />
						) : (
							<MySVG variant="heartEmpty" />
						)}
					</article>

					<article
						onClick={() => {
							setBookmarkedDisliked(!bookmarkedDisliked);
						}}
					>
						{bookmarkedDisliked ? (
							<MySVG variant="brokenHeartFilled" color="red" />
						) : (
							<MySVG variant="brokenHeartEmpty" />
						)}
					</article>

					<article
						onClick={() => {
							setBookmarkedRead(!bookmarkedRead);
						}}
					>
						{bookmarkedRead ? (
							<MySVG variant="bookFilled" color="red" />
						) : (
							<MySVG variant="bookEmpty" />
						)}
					</article>
				</WrapperBookmark>

				<SubmitButton type="submit">submit</SubmitButton>
			</form>
		</Container>
	);
}
