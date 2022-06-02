import Cards from '../Cards/Cards';
export default {
	title: 'Components/Cards',
	component: Cards,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

export function Default() {
	return <Cards />;
}
