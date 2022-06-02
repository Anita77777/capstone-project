import Link from 'next/link';
import MySVG from '../UI/SVG/SVG';

import { useRouter } from 'next/router';
import { NavbarStyled } from '../UI/NavbarStyled/Navbar.styled';

export default function Navbar() {
	const router = useRouter();
	return (
		<NavbarStyled>
			<Link passHref href="/">
				<a aria-label="form" pathName={router.pathname}>
					<MySVG variant="form" color="white" />
				</a>
			</Link>

			<Link passHref href="/liked">
				<a aria-label="liked" pathName={router.pathname}>
					<MySVG variant="heartFilled" color="white" />
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
