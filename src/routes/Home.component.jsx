import styles from "../styles/Home.styles.module.css";
import { useNavigate } from "react-router-dom";
import List from "../components/List.component";
import Search from "../components/Search.component";
export default function HomePage(props) {
	const { user } = props;
	const navigate = useNavigate();

	return (
		<>
			{user && (
				<div className={styles.homeContainer}>
					<Search children={<List />} />
				</div>
			)}
		</>
	);
}
