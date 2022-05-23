import Card from '../Card/Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Components/Card/Card',
	component: Card,
	decorators: [
		Story => {
			return (
				<div style={{ padding: '5em', maxWidth: '500px' }}>
					<Story />
				</div>
			);
		},
	],
};

const props = {
	books: {
		author: 'Paolo',
		title: 'The Alchemist',
		comment: 'Favorite Book of all times',
	},
};

export function Default() {
	return <Card {...props.books} />;
}
