import dynamic from 'next/dynamic';
import Typography from '../src/components/UI/Typography/Typography';
import useStore from '../src/components/useStore/useStore';
import { HeaderStyled } from '../src/components/UI/Header/Header.styled';

//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const Cards = dynamic(() => import('../src/components/Cards/Cards'), {
	ssr: false, // This line is important.
});

export default function Disliked() {
	const newBook = useStore(state => state.newBooks);

	return (
		<div>
			<HeaderStyled>
				<Typography variant="h1">Books i disliked</Typography>
			</HeaderStyled>
			<Cards key={newBook.id} bookmarkStatus="disliked" />
		</div>
	);
}
