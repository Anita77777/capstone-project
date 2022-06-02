import Typography from '../src/components/UI/Typography/Typography';
import Form from '../src/components/Form/Form';
import { HeaderStyled } from '../src/components/UI/Header/Header.styled';

export default function Home() {
	return (
		<div>
			<HeaderStyled>
				<Typography variant="h1">choose your book</Typography>
			</HeaderStyled>
			<Form />
		</div>
	);
}
