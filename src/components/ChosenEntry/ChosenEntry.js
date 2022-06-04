import useStore from '../useStore/useStore';

export default function ChosenEntry() {
	const foundEntrys = useStore(state => state.foundEntrys);

	return (
		<ul>
			{foundEntrys.map(chosenEntry => {
				return (
					<div key={chosenEntry.id}>
						<li>
							<p>Author: {chosenEntry.author}</p>
							<p>Title: {chosenEntry.title}</p>
						</li>
					</div>
				);
			})}
		</ul>
	);
}
