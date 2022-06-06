import Typography from '../src/components/UI/Typography/Typography';
import { HeaderStyled } from '../src/components/UI/Header.styled';
import LandingPage from '../src/components/LandingPage/LandingPage';

export default function Home() {
	return (
		<>
			<HeaderStyled>
				<Typography variant="h1">Readembr</Typography>
			</HeaderStyled>
			<LandingPage />
		</>
	);
}
