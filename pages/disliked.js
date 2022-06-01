import dynamic from 'next/dynamic';

import useStore from '../src/components/useStore/useStore';

//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const Cards = dynamic(() => import('../src/components/Cards/Cards'), {
	ssr: false, // This line is important.
});

export default function Disliked() {
	const newBook = useStore(state => state.newBooks);

	return (
		<>
			<h1>Books I Disliked</h1>
			<Cards key={newBook.id} bookmarkStatus="disliked" />
		</>
	);
}
