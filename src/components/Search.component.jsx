import styles from "../styles/Search.styles.module.css";
import { FcFilledFilter, FcPlus, FcAbout } from "react-icons/fc";
export default function Search(props) {
	const { children } = props;
	return (
		<div className={styles.searchContainer}>
			<div className={styles.searchSection}>
				<div>
					<div className={styles.sidebarItem}>
						<FcFilledFilter />
					</div>
					<div className={styles.sidebarItem}>
						<FcPlus />
					</div>
				</div>
				<div className={styles.sidebarItemAbout}>
					<FcAbout />
				</div>
			</div>
			<div className={styles.childSection}>{children}</div>
		</div>
	);
}
