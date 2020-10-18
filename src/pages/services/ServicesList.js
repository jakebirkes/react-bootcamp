import React from 'react';
import ServicesData from './ServicesData';
import { Link } from 'react-router-dom';

const ServicesList = () => {
	const services = ServicesData.map(service => (
		<h3 key={service._id}>
			<Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}
		</h3>
	));

	return (
		<div>
			<h1>Services List Page</h1>
			{services}
		</div>
	);
};

export default ServicesList;
