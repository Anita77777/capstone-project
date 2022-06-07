import Cards from '../components/Cards/Cards';

export default {
	title: 'Components/Cards',
	component: Cards,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

const props = {
	Author: '',
	Title: '',
	Comment: '',
	Selection: '',
};

export function Default() {
	return <Cards {...props} />;
}
