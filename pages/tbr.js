import dynamic from 'next/dynamic';

//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const Card = dynamic(() => import('../src/components/Card/Card'), {
	ssr: false, // This line is important.
});

export default function ToBeRead() {
	return (
		<>
			<h1>Books I want to Read</h1>
			<Card />
		</>
	);
}
