import useStore from '../useStore/useStore';

import { ContainerSearch, SearchField, WrapperList, WrapperImageForm } from '../UI/Form.styled';
import Image from 'next/image';
import MySVG from '../UI/SVG/SVG';
import { Button } from '../UI/ButtonStyled/Button.styled';

export default function Bookresults() {
	const books = useStore(state => state.books);
	const fetchBooks = useStore(state => state.fetchBooks);
	const chooseEntry = useStore(state => state.chooseEntry);
	const setSearchTerm = useStore(state => state.setSearchTerm);
	const searchTerm = useStore(state => state.searchTerm);

	const handleChange = event => {
		setSearchTerm(event.target.value);
	};
	return (
		<section>
			<form
				onSubmit={event => {
					event.preventDefault();
					fetchBooks(searchTerm);
				}}
			>
				<ContainerSearch>
					<SearchField
						type="search"
						placeholder="Enter the booktitle here"
						value={searchTerm}
						onChange={handleChange}
					/>

					<Button type="Search" variant="Search">
						<MySVG variant="Search" color="black" size="30px" />
					</Button>
				</ContainerSearch>
				<WrapperList>
					{books.items.map(book => {
						return (
							<li
								key={book.id}
								onClick={() => {
									chooseEntry(book.id);
								}}
							>
								<WrapperImageForm>
									<Image
										width={90}
										height={120}
										alt={`${book.volumeInfo.title} book`}
										src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
									/>
								</WrapperImageForm>
							</li>
						);
					})}
				</WrapperList>
			</form>
		</section>
	);
}
