import styles from "../styles/Home.styles.module.css";
import { useNavigate } from "react-router-dom";
export default function HomePage(props) {
	const { user } = props;
	const navigate = useNavigate();

	return <div>{user && <h1>Home Page</h1>}</div>;
}
