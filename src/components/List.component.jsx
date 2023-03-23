import styles from "../styles/List.styles.module.css";
import ListItem from "./ListItem.component";
export default function List(props) {
	const {
		listItems = [
			{ id: 1 },
			{ id: 2 },
			{ id: 3 },
			{ id: 4 },
			{ id: 5 },
			{ id: 6 },
			{ id: 7 },
			{ id: 8 },
			{ id: 9 },
			{ id: 10 },
		],
	} = props;
	return (
		<div className={styles.listContainer}>
			{listItems.map((listItem) => {
				return <ListItem key={listItem.id} item={listItem} />;
			})}
		</div>
	);
}
