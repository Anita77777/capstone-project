import Form from '../src/components/Form/Form';
import Card from '../src/components/Card/Card';
import List from '../src/components/List/List';

export default function Home() {
	return (
		<div>
			<h1>Add your Books</h1>
			<Form />
			<Card />
			<List />
		</div>
	);
}
