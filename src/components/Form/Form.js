import { Container, Formcomment, Formfield } from './Form.styled';
import { SubmitButton } from '../Form/SubmitButton.styled';
import { useImmer } from 'use-immer';
import { nanoid } from 'nanoid';

export default function Form({ updateAuthors }) {
	const [authorValue, updateAuthorValue] = useImmer('');

	const [titleValue, updateTitleValue] = useImmer('');
	const [commentValue, updateCommentValue] = useImmer('');

	return (
		<Container>
			<form
				onSubmit={event => {
					event.preventDefault();
					updateAuthors(draft => {
						draft.push({
							name: authorValue,
							id: nanoid(),
						});
					});
					updateAuthorValue('');
				}}
			>
				<Formfield
					required
					fullWidth
					name="author"
					type="text"
					label="author"
					value={authorValue}
					placeholder="Add author here"
					onChange={event => {
						updateAuthorValue(event.target.value);
					}}
				/>
				<Formfield
					required
					fullWidth
					name="title"
					label="title"
					value={titleValue}
					placeholder="Add booktitle here"
					onChange={event => {
						updateTitleValue(event.target.value);
					}}
				/>
				<Formcomment
					required
					fullWidth
					name="comment"
					label="comment"
					value={commentValue}
					placeholder="leave a comment here"
					onChange={event => {
						updateCommentValue(event.target.value);
					}}
				/>
				<SubmitButton type="submit" variant="contained">
					Submit
				</SubmitButton>
			</form>
		</Container>
	);
}
