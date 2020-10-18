import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Profile from '../pages/profile/Profile';
import Info from '../pages/profile/Info';
import Settings from '../pages/profile/Settings';
import ServicesList from '../pages/services/ServicesList';
import ServicesDetail from '../pages/services/ServicesDetail';

const Routes = () => (
	<Switch>
		<Route exact path="/">
			<Home />
		</Route>
		<Route exact path="/about">
			<About />
		</Route>
		<Route exact path="/contact">
			<Contact />
		</Route>
		<Route exact path="/services">
			<ServicesList />
		</Route>
		<Route path="/services/:serviceId">
			<ServicesDetail />
		</Route>
		<Route exact path="/profile">
			<Profile />
		</Route>
		<Route path="/profile/info">
			<Info />
		</Route>
		<Route path="/profile/settings">
			<Settings />
		</Route>
	</Switch>
);

export default Routes;
