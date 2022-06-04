import Navbar from '../Navbar/Navbar';

export default {
	title: 'Components/Navbar/Navbar',
	component: Navbar,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

export function Default() {
	return <Navbar />;
}
