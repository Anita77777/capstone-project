import Form from '../src/components/Form/Form';

import dynamic from 'next/dynamic';

export default function Home() {
	const Card = dynamic(() => import('../src/components/Card/Card'), {
		ssr: false,
	});

	return (
		<div>
			<Form />
			<Card />
		</div>
	);
}
