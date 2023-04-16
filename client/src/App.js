import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Tasks from "./components/Tasks";
import About from "./components/About";
import Datas from "./components/Datas";

const App = () => {
	const user = JSON.parse(localStorage.getItem('profile'));

	return (
		<BrowserRouter>
			<Container maxWidth="xl">
				<Navbar />
				<Switch>
					<Route path="/" exact component={() => <Redirect to="/posts" />} />
					<Route path="/posts" exact component={Home} />
					<Route path="/posts/search" exact component={Home} />
					<Route path="/posts/:id" exact component={PostDetails} />
					<Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
					<Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
					<Route path="/tasks" exact component={Tasks} />
					<Route path="/about" exact component={About} />
					<Route path="/data" exact component={Datas} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
