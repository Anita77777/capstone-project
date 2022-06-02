import useStore from '../useStore/useStore';
import { WrapperBookmark } from '../UI/ButtonStyled/BookmarkButton.styled';
import MySVG from '../UI/SVG/SVG';
import { BookmarkButton } from '../UI/ButtonStyled/BookmarkButton.styled';

export default function Bookmark() {
	const updateBookmark = useStore(state => state.updateBookmark);
	const bookmarkStatus = useStore(state => state.bookmarkStatus);

	return (
		<WrapperBookmark>
			{bookmarkStatus === 'liked' ? (
				<BookmarkButton type="button" onClick={() => updateBookmark(null)}>
					<MySVG variant="heartFilled" color="#694370" />
				</BookmarkButton>
			) : (
				<BookmarkButton type="button" onClick={() => updateBookmark('liked')}>
					<MySVG variant="heartEmpty" />
				</BookmarkButton>
			)}

			{bookmarkStatus === 'disliked' ? (
				<BookmarkButton type="button" onClick={() => updateBookmark(null)}>
					<MySVG variant="brokenHeartFilled" color="#694370" />
				</BookmarkButton>
			) : (
				<BookmarkButton
					type="button"
					onClick={() => {
						updateBookmark('disliked');
					}}
				>
					<MySVG variant="brokenHeartEmpty" />
				</BookmarkButton>
			)}

			{bookmarkStatus === 'tbr' ? (
				<BookmarkButton type="button" onClick={() => updateBookmark(null)}>
					<MySVG variant="bookFilled" color="#694370" />
				</BookmarkButton>
			) : (
				<BookmarkButton type="button" onClick={() => updateBookmark('tbr')}>
					<MySVG variant="bookEmpty" />
				</BookmarkButton>
			)}
		</WrapperBookmark>
	);
}
