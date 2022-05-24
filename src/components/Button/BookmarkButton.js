import useStore from '../useStore/useStore';
import { WrapperBookmark } from '../Form/Form.styled';
import MySVG from '../SVG/SVG';

export default function Bookmark() {
	const updateBookmark = useStore(state => state.updateBookmark);
	const bookmarkStatus = useStore(state => state.bookmarkStatus);
	console.log(bookmarkStatus);
	return (
		<WrapperBookmark>
			{bookmarkStatus === 'liked' ? (
				<div onClick={() => updateBookmark('')}>
					{' '}
					<MySVG variant="heartFilled" color="#694370" />
				</div>
			) : (
				<div onClick={() => updateBookmark('liked')}>
					<MySVG variant="heartEmpty" />
					<p>Liked</p>
				</div>
			)}
			{bookmarkStatus === 'disliked' ? (
				<div onClick={() => updateBookmark('')}>
					<MySVG variant="brokenHeartFilled" color="#694370" />{' '}
				</div>
			) : (
				<div onClick={() => updateBookmark('disliked')}>
					<MySVG variant="brokenHeartEmpty" /> <p>Disliked</p>
				</div>
			)}
			{bookmarkStatus === 'tbr' ? (
				<div onClick={() => updateBookmark('')}>
					<MySVG variant="bookFilled" color="#694370" />{' '}
				</div>
			) : (
				<div onClick={() => updateBookmark('tbr')}>
					<MySVG variant="bookEmpty" />
					<p>Tbr</p>
				</div>
			)}
		</WrapperBookmark>
	);
}
