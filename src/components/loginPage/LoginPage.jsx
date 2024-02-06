import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import "./loginPage.style.css";

const correctCredentials = {
	username: "meka",
	password: "12345",
};

const LoginPage = () => {
	const [user, setUser] = useState({ username: "", password: "" });

	const { setUser: updateUser } = useContext(UserContext);

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setUser((user) => ({
			...user,
			[name]: value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (
			user.username === correctCredentials.username &&
			user.password === correctCredentials.password
		) {
			console.log("correct user creds");
			updateUser(user);
		} else {
			alert("try again");
		}
	};

	return (
		<div className="login-container">
			<div className="form-container">
				<h1>Login Page</h1>
				<form onSubmit={onSubmit}>
					<label>UserName</label>
					<input
						type="text"
						name="username"
						value={user.username}
						onChange={onChangeHandler}
						placeholder="Username"
						required
					/>
					<label>Password</label>
					<input
						type="password"
						name="password"
						value={user.password}
						onChange={onChangeHandler}
						placeholder="Password"
						required
					/>
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
