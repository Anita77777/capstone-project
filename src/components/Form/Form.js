import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Formcomment, Formfield, Card, CardContainer } from './Form.styled';
import { SubmitButton } from '../Button.js/SubmitButton.styled';
import { nanoid } from 'nanoid';

export default function Form() {
	const [forms, setForms] = useState([]);

	const { register, handleSubmit } = useForm();

	return (
		<>
			<Container>
				<form
					onSubmit={handleSubmit(data => setForms([...forms, { ...data, id: nanoid() }]))}
				>
					<label htmlFor="Author">
						<h3>Author</h3>
					</label>
					<Formfield
						required
						type="text"
						name="Author"
						placeholder="Add Author"
						autoComplete="off"
						{...register('Author')}
					/>
					<label htmlFor="Booktitle">
						<h3>Booktitle: </h3>
					</label>
					<Formfield
						required
						type="text"
						text="Booktitle"
						placeholder="Add Booktitle"
						{...register('Booktitle')}
					/>
					<label htmlFor="Comment">
						<h3>Comment: </h3>
					</label>
					<Formcomment
						required
						type="text"
						text="Comment"
						placeholder="Add your Comment"
						{...register('Comment')}
					/>

					<SubmitButton type="submit">submit</SubmitButton>
				</form>
			</Container>
			<CardContainer>
				{forms.map(forms => {
					return (
						<Card key={forms.id}>
							Author: {forms.Author}
							Booktitle: {forms.Booktitle}
							Comment: {forms.Comment}
						</Card>
					);
				})}
			</CardContainer>
		</>
	);
}
