import React from 'react';
import { Link } from 'react-router-dom';
import JumbotronWrapper from './JumbotronWrapper';

const NotFound = () => (
	<JumbotronWrapper title= '404 not found'>
		<Link className="nav-link" to="/">Back</Link>
	</JumbotronWrapper>
);


export default NotFound;
