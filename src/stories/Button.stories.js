import { Button } from '../components/UI/ButtonStyled/Button.styled';

export default {
	title: 'Components/Button',
	component: Button,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

const propsSubmit = {
	children: 'Submit',
};

const propsDelete = {
	children: 'Delete',
};

const propsEdit = {
	children: 'Edit',
};

const propsGoodreads = {
	children: 'Goodreads',
};

const propsHome = {
	children: 'Home',
};

export function AddToLibrary() {
	return <Button variant="submit" {...propsSubmit} />;
}
export function Delete() {
	return <Button variant="delete" {...propsDelete} />;
}

export function Edit() {
	return <Button variant="edit" {...propsEdit} />;
}

export function Home() {
	return <Button variant="home" {...propsHome} />;
}

export function Goodreads() {
	return <Button variant="goodreads" {...propsGoodreads} />;
}
