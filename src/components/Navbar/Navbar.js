import Link from 'next/link';
import MySVG from '../UI/SVG/SVG';
import { useRouter } from 'next/router';
import { NavbarStyled } from '../UI/Navbar.styled';

export default function Navbar() {
	const router = useRouter();
	return (
		<NavbarStyled>
			<Link passHref href="/">
				<a aria-label="Home" pathName={router.pathname}>
					<MySVG variant="home" color="white" />
				</a>
			</Link>

			<Link passHref href="/liked">
				<a aria-label="liked" pathName={router.pathname}>
					<MySVG variant="heartFilled" color="white" />
				</a>
			</Link>

			<Link passHref href="/addBook">
				<a aria-label="Add" pathName={router.pathname}>
					<MySVG variant="Add" color="white" />
				</a>
			</Link>

			<Link passHref href="/disliked">
				<a aria-label="disliked" pathName={router.pathname}>
					<MySVG variant="brokenHeartFilled" color="white" />
				</a>
			</Link>

			<Link passHref href="/tbr">
				<a aria-label="toBeRead" pathName={router.pathname}>
					<MySVG variant="bookFilled" color="white" />
				</a>
			</Link>
		</NavbarStyled>
	);
}
