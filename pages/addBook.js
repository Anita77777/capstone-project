import Typography from '../src/components/UI/Typography/Typography';
import { HeaderStyled } from '../src/components/UI/Header/Header.styled';
import dynamic from 'next/dynamic';
//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
const Form = dynamic(() => import('../src/components/Form/Form'), {
	ssr: false, // This line is important.
});

export default function AddBook() {
	return (
		<div>
			<HeaderStyled>
				<Typography variant="h1">Add your Book</Typography>
			</HeaderStyled>
			<Form />
		</div>
	);
}
