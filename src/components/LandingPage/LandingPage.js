import { Button } from '../UI/ButtonStyled/Button.styled';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'animate.css';

export default function LandingPage() {
	const router = useRouter();
	return (
		<WrapperLandingPage>
			<Link passHref href="/addBook">
				<LinkHome aria-label="Add" pathName={router.pathname}>
					<Button
						type="button"
						variant="Home"
						className="animate__animated animate__fadeInLeft"
					>
						Add your Book
					</Button>
				</LinkHome>
			</Link>
			<Link passHref href="/liked">
				<LinkHome aria-label="liked" pathName={router.pathname}>
					<Button
						type="button"
						variant="Home"
						className="animate__animated animate__fadeInRight"
					>
						Books I Loved
					</Button>
				</LinkHome>
			</Link>
			<Link passHref href="/disliked">
				<LinkHome aria-label="disliked" pathName={router.pathname}>
					<Button
						ttype="button"
						variant="Home"
						className="animate__animated animate__fadeInLeft"
					>
						Books I Disliked
					</Button>
				</LinkHome>
			</Link>
			<Link passHref href="/tbr">
				<LinkHome aria-label="toBeRead" pathName={router.pathname}>
					<Button
						type="button"
						variant="Home"
						className="animate__animated animate__fadeInRight"
					>
						My Future Reads
					</Button>
				</LinkHome>
			</Link>
		</WrapperLandingPage>
	);
}

export const LinkHome = styled.a`
	text-decoration: none;
`;

export const WrapperLandingPage = styled.div`
	margin: 1rem;
`;
