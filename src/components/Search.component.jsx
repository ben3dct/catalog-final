import styles from "../styles/Search.styles.module.css";
import { FcFilledFilter, FcPlus, FcAbout } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
export default function Search(props) {
	const { children } = props;
	const navigate = useNavigate();

	const createSolutionPage = () => {
		navigate("/create");
	};

	return (
		<div className={styles.searchContainer}>
			<div className={styles.searchSection}>
				<div>
					<div className={styles.sidebarItem}>
						<FcFilledFilter />
					</div>
					<div
						className={styles.sidebarItem}
						onClick={createSolutionPage}
					>
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
