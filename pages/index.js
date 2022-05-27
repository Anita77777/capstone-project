import Form from '../src/components/Form/Form';
import useStore from '../src/components/useStore/useStore';
import dynamic from 'next/dynamic';

export default function Home() {
	//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
	const Card = dynamic(() => import('../src/components/Card/Card'), {
		ssr: false, // This line is important.
	});

	const edit = useStore(state => state.edit);
	return (
		<div>
			<Form />
			{!edit && <Card />}
		</div>
	);
}
