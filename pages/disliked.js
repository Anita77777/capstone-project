import dynamic from 'next/dynamic';
import Navbar from '../src/components/Navbar/Navbar';
import useStore from '../src/components/useStore/useStore';

//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const Cards = dynamic(() => import('../src/components/Cards/Cards'), {
	ssr: false, // This line is important.
});

export default function Disliked() {
	const newBooks = useStore(state => state.newBooks);
	const dislikedBooks = newBooks.filter(newBook => newBook.bookmarkStatus === 'disliked');

	return (
		<>
			<h1>Books I Disliked</h1>

			{dislikedBooks.map(newBook => {
				return <Cards key={newBook.id} bookmarkStatus="disliked" />;
			})}
			<Navbar />
		</>
	);
}
