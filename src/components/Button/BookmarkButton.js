import { useStore } from 'zustand';
import { WrapperBookmark } from '../Form/Form.styled';
import MySVG from '../SVG/SVG';

export default function Bookmark() {
	const toggleBookmark = useStore(state => state.toggleBookmark);

	return (
		<button
			type="submit"
			variant="bookmark"
			onClick={event => {
				event.preventDefault();
				toggleBookmark();
			}}
		>
			<WrapperBookmark>
				{toggleBookmark ? (
					<MySVG variant="heartFilled" color="red" />
				) : (
					<MySVG variant="heartEmpty" />
				)}

				{toggleBookmark ? (
					<MySVG variant="brokenHeartFilled" color="red" />
				) : (
					<MySVG variant="brokenHeartEmpty" />
				)}

				{toggleBookmark ? (
					<MySVG variant="bookFilled" color="red" />
				) : (
					<MySVG variant="bookEmpty" />
				)}
			</WrapperBookmark>
		</button>
	);
}
