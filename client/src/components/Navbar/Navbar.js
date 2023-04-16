/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import Logo from '../../images/Logo.png';
import memoriesLogo from '../../images/memoriesLogo.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const dispatch = useDispatch();
	const location = useLocation();

	const history = useHistory();
	const classes = useStyles();

	const logout = () => {
		dispatch({ type: actionType.LOGOUT });
		history.push('/auth');
		setUser(null);
	};

	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}
		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	return (
		<AppBar className={classes.appBar} position="static" color="inherit">
			<Link to="/" className={classes.brandContainer}>
				<img component={Link} to="/" src={Logo} alt="icon" height="55px" />
				<img className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
			</Link>
			<ul className={classes.navRegList}>
				{user ? <li className={classes.navRegListLi}><Link to={"/data"} className={classes.navRegListLiLink}>Данные</Link></li> : <></>}
				<li className={classes.navRegListLi}><Link to={"/about"} className={classes.navRegListLiLink}>О приложении</Link></li>
				<li className={classes.navRegListLi}><Link to={"/tasks"} className={classes.navRegListLiLink}>Задачи</Link></li>
			</ul>
			<Toolbar className={classes.toolbar}>
				{user?.result ? (
					<div className={classes.profileContainer}>
						<div className={classes.profile}>
							<Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
							<Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
						</div>
						<Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Выйти</Button>
					</div>
				) : (
					<Button component={Link} to="/auth" variant="contained" color="primary">Войти</Button>
				)}
			</Toolbar>
		</AppBar >
	);
};

export default Navbar;
