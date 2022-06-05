import useStore from '../useStore/useStore';
import { WrapperBookmark } from '../UI/ButtonStyled/BookmarkButton.styled';
import MySVG from '../UI/SVG/SVG';
import { BookmarkButton } from '../UI/ButtonStyled/BookmarkButton.styled';
import Typography from '../UI/Typography/Typography';
export default function Bookmark() {
	const updateBookmark = useStore(state => state.updateBookmark);
	const bookmarkStatus = useStore(state => state.bookmarkStatus);

	return (
		<WrapperBookmark>
			{bookmarkStatus === 'liked' ? (
				<BookmarkButton type="button" onClick={() => updateBookmark(null)}>
					<MySVG variant="heartFilled" color="#db7093" />
				</BookmarkButton>
			) : (
				<BookmarkButton type="button" onClick={() => updateBookmark('liked')}>
					<MySVG variant="heartEmpty" />
					<Typography variant="p">Loved</Typography>
				</BookmarkButton>
			)}

			{bookmarkStatus === 'disliked' ? (
				<BookmarkButton type="button" onClick={() => updateBookmark(null)}>
					<MySVG variant="brokenHeartFilled" color="#db7093" />
				</BookmarkButton>
			) : (
				<BookmarkButton
					type="button"
					onClick={() => {
						updateBookmark('disliked');
					}}
				>
					<MySVG variant="brokenHeartEmpty" />
					<Typography variant="p">Disliked</Typography>
				</BookmarkButton>
			)}

			{bookmarkStatus === 'tbr' ? (
				<BookmarkButton type="button" onClick={() => updateBookmark(null)}>
					<MySVG variant="bookFilled" color="#db7093" />
				</BookmarkButton>
			) : (
				<BookmarkButton type="button" onClick={() => updateBookmark('tbr')}>
					<MySVG variant="bookEmpty" />
					<Typography variant="p">TBR</Typography>
				</BookmarkButton>
			)}
		</WrapperBookmark>
	);
}
