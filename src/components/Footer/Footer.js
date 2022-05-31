import Link from 'next/link';
import MySVG from '../SVG/SVG';
import { useRouter } from 'next/router';

export default function Footer() {
	const router = useRouter();
	return (
		<footer>
			<Link passHref href="/">
				<a aria-label="form" pathName={router.pathname}>
					Form
					<MySVG variant="form" />
				</a>
			</Link>

			<Link passHref href="/liked">
				<a aria-label="liked" pathName={router.pathname}>
					Liked
					<MySVG variant="heartFilled" />
				</a>
			</Link>

			<Link passHref href="/disliked">
				<a aria-label="disliked" pathName={router.pathname}>
					Disliked
					<MySVG variant="brokenHeartFilled" />
				</a>
			</Link>

			<Link passHref href="/tbr">
				<a aria-label="toBeRead" pathName={router.pathname}>
					TBR
					<MySVG variant="bookFilled" />
				</a>
			</Link>
		</footer>
	);
}
