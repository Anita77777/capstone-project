import { useForm } from 'react-hook-form';
import { CardContainer, Container, Formcomment, Formfield } from './Form.styled';
import { SubmitButton } from '../Button/SubmitButton.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export default function Form() {
	const [books, setBooks] = useState([
		{
			author: 'Paolo Coelho',
			title: 'The Alchemist',
			comment:
				'An Andalusian shepherd boy named Santiago dreams of a treasure while in a ruined church. He consults a Gypsy fortune-teller about the meaning of the recurring dream. The woman interprets it as a prophecy, telling the boy that he will discover a treasure at the Egyptian pyramids. ',
			id: nanoid(),
		},
	]);
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();

	return (
		<>
			<Container>
				<form
					onSubmit={handleSubmit(data => setBooks([...books, { ...data, id: nanoid() }]))}
				>
					<label htmlFor="Author">
						<h3>Author</h3>
					</label>
					<Formfield
						aria-invalid={errors.name ? 'true' : 'false'}
						{...register('author', { required: true, maxLength: 30 })}
						required
						name="author"
						type="text"
						id="author"
						autoComplete="off"
					/>

					<label htmlFor="Booktitle">
						<h3>Booktitle: </h3>
					</label>
					<Formfield
						aria-invalid={errors.name ? 'true' : 'false'}
						{...register('title', { required: true, maxLength: 30 })}
						required
						name="title"
						type="text"
						id="title"
						autoComplete="off"
					/>

					<label htmlFor="Comment">
						<h3>Comment: </h3>
					</label>
					<Formcomment
						aria-invalid={errors.Comment ? 'true' : 'false'}
						{...register('comment', { required: true, maxLength: 100 })}
						required
						name="comment"
						type="text"
						id="comment"
						autoComplete="off"
					/>

					<SubmitButton type="submit">submit</SubmitButton>
				</form>
			</Container>
			<ul>
				{books.map(book => {
					return (
						// eslint-disable-next-line react/jsx-key
						<CardContainer>
							<li key={book.id}>
								<p>Author: {book.author}</p>
								<p>Title: {book.title}</p>
								<p>{book.comment}</p>
							</li>
						</CardContainer>
					);
				})}
			</ul>
		</>
	);
}
