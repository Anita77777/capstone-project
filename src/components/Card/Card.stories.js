import Card from '../Card/Card';

export default {
	title: 'Components/Card/Card',
	component: Card,
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

const cardProps = {
	author: 'Paolo',
	title: 'The Alchemist',
	comment: 'Favorite Book of all times',
};

export function Default() {
	return <Card {...cardProps} />;
}
