import styles from "../styles/Login.styles.module.css";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import { FaUserLock } from "react-icons/fa";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function LoginPage(props) {
	const { handleSignIn } = props;
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	useEffect(() => {
		setOpen(true);
	}, []);
	return (
		<div className={styles.loginContainer}>
			<Tooltip title="user is not authenticated">
				<div className={styles.iconBg} onClick={handleSignIn}>
					<FaUserLock color="#ffff" size="10rem" />
				</div>
			</Tooltip>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert
					anchorOrigin={{ vertical: "top", horizontal: "right" }}
					onClose={handleClose}
					severity="info"
				>
					Please sign in.
				</Alert>
			</Snackbar>
		</div>
	);
}
