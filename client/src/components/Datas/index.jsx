/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styles from "./styles.module.css";
const Datas = () => {
	const user = JSON.parse(localStorage.getItem('profile'));
	let email;
	let name;
	let password;
	let _id;
	let token;
	if (user.result.googleId) {
		email = user?.result?.email;
		name = user?.result?.name;
		password = "Нет, но есть imageUrl: " + user?.result.imageUrl;
		_id = user?.result?.googleId;
		token = user?.token;
	} else {
		email = user?.result?.email;
		name = user?.result?.name;
		password = user?.result?.password;
		_id = user?.result?._id;
		token = user?.token;
	}

	return (
		<div className={styles.container}>
			{user ?
				<><div className={styles.email}>{`email: ${email}`}</div>
					<div className={styles.email}>{`password: ${password}`}</div>
					<div className={styles.email}>{`name: ${name}`}</div>
					<div className={styles.email}>{`id: ${_id}`}</div>
					<div className={styles.email}>{`token: ${token}`}</div></>
				: <div className={styles.email}>nea</div>
			}

		</div>
	);
};

export default Datas;
