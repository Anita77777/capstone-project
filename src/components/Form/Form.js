/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { Container, Formcomment, Formfield, Card, CardContainer } from './Form.styled';
import { SubmitButton } from '../Form/SubmitButton.styled';

export default function Form() {
	const [form, setForm] = useState([]);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	return (
		<>
			<Container>
				<label htmlFor="Form">Form:</label>
				<Form
					onSubmit={handleSubmit(data => setForm([...form, { ...data, id: nanoid() }]))}
				>
					<Formfield
						type="text"
						text="Author"
						placeholder="Add Author"
						{...register('Author')}
					/>
					<Formfield
						type="text"
						text="Booktitle"
						placeholder="Add Booktitle"
						{...register('Booktitle')}
					/>
					<Formcomment
						type="text"
						text="Comment"
						placeholder="Add your Comment"
						{...register('Comment')}
					/>

					<SubmitButton type="submit">submit</SubmitButton>
				</Form>
			</Container>
			<CardContainer>
				{form.map(form => {
					return (
						// eslint-disable-next-line react/jsx-key
						<>
							<Card key={form.id}>
								<p>Author: {form.Author}</p>
								<br />
								<p> Booktitle: {form.Booktitle}</p>
								<br />
								<p>Comment: {form.Comment}</p>
							</Card>
							<br />
						</>
					);
				})}
			</CardContainer>
		</>
	);
}
