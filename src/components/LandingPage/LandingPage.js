import { Button } from '../UI/ButtonStyled/Button.styled';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'animate.css';
import Image from 'next/image';

export default function LandingPage() {
	const router = useRouter();
	return (
		<>
			<WrapperImage>
				<Image src="/Books.jpg" alt="Bookshelf" layout="fill" />
			</WrapperImage>
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
		</>
	);
}

export const LinkHome = styled.a`
	text-decoration: none;
`;

export const WrapperLandingPage = styled.div`
	position: relative;
	margin-left: 1.5rem;
`;
export const WrapperImage = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -10;
	position: fixed;
	top: 0;
`;
