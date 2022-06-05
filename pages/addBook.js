import Typography from '../src/components/UI/Typography/Typography';
import { HeaderStyled } from '../src/components/UI/Header/Header.styled';
import Form from '../src/components/Form/Form';

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
