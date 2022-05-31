import Link from 'next/link';
import MySVG from '../SVG/SVG';

export default function Navbar() {
	return (
		<footer>
			<Link passHref href="/">
				<button type="button" variant="nav">
					<MySVG variant="form" />
				</button>
			</Link>

			<Link passHref href="/liked">
				<button type="button" variant="nav">
					<MySVG variant="heartFilled" />
				</button>
			</Link>

			<Link passHref href="/disliked">
				<button type="button" variant="nav">
					<MySVG variant="brokenHeartFilled" />
				</button>
			</Link>

			<Link passHref href="/tbr">
				<button type="button" variant="nav">
					<MySVG variant="bookFilled" />
				</button>
			</Link>
		</footer>
	);
}
