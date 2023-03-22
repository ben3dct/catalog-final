import styles from "../styles/Login.styles.module.css";
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import { FaUserLock } from "react-icons/fa";
export default function LoginPage(props) {
	const { onSignIn } = props;

	function handleSignIn() {}

	return (
		<div className={styles.loginContainer}>
			<Tooltip title="user is not authenticated">
				<div className={styles.iconBg} onClick={handleSignIn}>
					<FaUserLock color="#ffff" size="10rem" />
				</div>
			</Tooltip>
			<div className={styles.alert}>
				<Alert severity="error">authenticate to view</Alert>
			</div>
		</div>
	);
}
