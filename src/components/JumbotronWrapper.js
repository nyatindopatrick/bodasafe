import React from 'react';

const JumbotronWrapper = (props) => {
	return (
		<div className="jumbo">
		<div className="jumbo_generic">
		<h1>{props.title}</h1>
				<div>{props.children}</div>
				<p>{props.description}</p>
		</div>
				
		</div>
	);
};




export default JumbotronWrapper;
