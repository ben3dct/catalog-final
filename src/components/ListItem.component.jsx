import styles from "../styles/ListItem.styles.module.css";

export default function ListItem(props) {
	const { item } = props;
	return (
		<div className={styles.itemContainer}>
			<div className={styles.item}>
				<div className={styles.itemBody}>
					<h4 className={styles.itemTitle}>{item.id}</h4>
					<div className={styles.itemDesc}>description</div>
					<div className={styles.itemMeta}>
						<span>date</span>
						<span>by Author</span>
					</div>
				</div>
			</div>
		</div>
	);
}
