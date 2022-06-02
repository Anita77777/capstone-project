import React from 'react';
import { BookmarkButton } from '../UI/ButtonStyled/BookmarkButton.styled';

export default {
	title: 'Components/BookmarkButton',
	component: BookmarkButton,
	decorators: [
		Story => {
			return (
				<div>
					<Story />
				</div>
			);
		},
	],
};

export function BookmarkButtons() {
	return <BookmarkButton />;
}
