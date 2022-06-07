import Navbar from '../components/Navbar/Navbar';

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
