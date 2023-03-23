import logo from "./logo.svg";
import "./App.css";
import "./styles/Global.styles.css";
import {
	Routes,
	Route,
	Link,
	useNavigate,
	useLocation,
	Navigate,
	Outlet,
} from "react-router-dom";
import LoginPage from "./routes/Login.component";
import Navbar from "./components/Navbar.component";
import HomePage from "./routes/Home.component";
import React, { useState, useEffect } from "react";
import { Amplify, Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import awsConfig from "./aws-exports";
import Create from "./routes/Create.component";

Amplify.configure(awsConfig);
function App() {
	const [user, setUser] = useState(null);
	const [customState, setCustomState] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = Hub.listen(
			"auth",
			({ payload: { event, data } }) => {
				switch (event) {
					case "signIn":
						setUser(data);
						break;
					case "signOut":
						setUser(null);
						break;
					case "customOAuthState":
						setCustomState(data);
				}
			}
		);

		Auth.currentAuthenticatedUser()
			.then((currentUser) => setUser(currentUser))
			.catch(() => navigate("/login"));

		return unsubscribe;
	}, []);

	const googleSignIn = async () => {
		await Auth.federatedSignIn({
			provider: CognitoHostedUIIdentityProvider.Google,
		});
	};

	const signOut = async () => {
		await Auth.signOut();
	};

	useEffect(() => {
		checkUser().then((bool) => {
			if (bool) {
				return;
			}
			navigate("/login");
		});
	}, [window.location.href]);

	const checkUser = async () => {
		try {
			await Auth.currentAuthenticatedUser();
			return true;
		} catch (e) {
			return false;
		}
	};

	return (
		<div className="app-container">
			<Routes>
				<Route
					path="/"
					element={
						<Navbar
							user={user}
							handleSignIn={googleSignIn}
							handleSignOut={signOut}
						/>
					}
				>
					<Route
						path="/login"
						element={<LoginPage handleSignIn={googleSignIn} />}
					/>
					<Route path="/" element={<HomePage user={user} />} />
					<Route path="/create" element={<Create user={user} />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
