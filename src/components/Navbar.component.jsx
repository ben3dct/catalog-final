import styles from "../styles/Navbar.styles.module.css";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";

const title = "Solution Catalog";
const homeRoute = "/";

export default function Navbar(props) {
	const { user, handleSignIn, handleSignOut } = props;
	const navigate = useNavigate();
	function navHome() {
		navigate(homeRoute);
	}
	return (
		<div className={styles.appContainer}>
			<div className={styles.headerLg}>
				<div className={styles.heading}>
					<h3 className={styles.title} onClick={navHome}>
						{title}
					</h3>
				</div>
				{user ? (
					<Button variant="contained" onClick={handleSignOut}>
						sign out
					</Button>
				) : (
					<Button variant="contained" onClick={handleSignIn}>
						sign in
					</Button>
				)}
			</div>
			<Outlet />
		</div>
	);
}
