import Form from '../src/components/Form/Form';

import dynamic from 'next/dynamic';

const Card = dynamic(() => import('../src/components/Card/Card'), {
	ssr: false, // This line is important.
});

export default function Home() {
	//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)

	return (
		<div>
			<Form />
			<Card />
		</div>
	);
}
