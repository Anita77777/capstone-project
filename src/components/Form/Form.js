import { useState } from 'react';

export default function Form() {
	const [nameValue, setNameValue] = useState('');
	const [titleValue, setTitleValue] = useState('');
	const [commentValue, setCommentValue] = useState('');

	const submit = async event => {
		event.preventDefault();

		console.log(titleValue, nameValue, commentValue);
	};
	return (
		<form onSubmit={submit}>
			<input
				fullWidth
				multiline
				name="name"
				label="name"
				value={nameValue}
				placeholder="Add author here"
				onChange={event => {
					setNameValue(event.target.value);
				}}
			/>

			<input
				fullWidth
				multiline
				name="title"
				label="title"
				value={titleValue}
				placeholder="Add title here"
				onChange={event => {
					setTitleValue(event.target.value);
				}}
			/>

			<input
				fullWidth
				multiline
				name="comment"
				label="comment"
				value={commentValue}
				placeholder="leave a comment here"
				onChange={event => {
					setCommentValue(event.target.value);
				}}
			/>

			<button type="submit" variant="contained">
				Submit
			</button>
		</form>
	);
}
