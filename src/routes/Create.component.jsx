import styles from "../styles/Create.styles.module.css";
import Form from "../components/Form.component";
export default function Create(props) {
	const { user } = props;
	return <>{user && <Form />}</>;
}
