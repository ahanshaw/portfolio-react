import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, logout } from '../../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user] = useAuthState(auth);

	if (user){
		return (
			<div>
				<button className="dashboard__btn" onClick={logout}>
					Logout
				</button>
				<Link to={`/admin/add`}>Add a Work Item</Link>
			</div>
        );
    }

	return (
		<div className="login">
			<div className="login__container">
				<input
					type="text"
					className="login__textBox"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<input
					type="password"
					className="login__textBox"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button
					className="login__btn"
					onClick={() => signInWithEmailAndPassword(email, password)}>
					login
				</button>
				<Link to={`/`}>Back to portfolio</Link>
			</div>
		</div>
	);
}