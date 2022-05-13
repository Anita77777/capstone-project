export default function List({ authors, updateAuthors }) {
	return (
		<>
			<ul>
				{authors.map(author => {
					const index = authors.findIndex(({ id }) => id === author.id);
					return (
						<li key={author.id}>
							<input
								type="checkbox"
								checked={author.isChecked}
								onChange={() => {
									updateAuthors(draft => {
										draft[index].isChecked = !draft[index].isChecked;
									});
								}}
							/>

							<button
								type="button"
								onClick={() => {
									updateAuthors(draft => {
										draft.splice(index, 1);
									});
								}}
							>
								delete
							</button>
							<button
								type="button"
								onClick={() => {
									updateAuthors(draft => {
										draft.splice(index, 1);
									});
								}}
							>
								Edit
							</button>
						</li>
					);
				})}
			</ul>
			<button
				type="button"
				onClick={() => {
					updateAuthor(draft => draft.filter(element => !element.isChecked));
				}}
			>
				Delete all dones
			</button>
		</>
	);
}
