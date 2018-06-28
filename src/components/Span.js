import React from 'react';

function Span(props) {
	let classNames = `arrElement ${props.color} ${props.sorted ? 'sorted' : ''}`;

	return (<span className={classNames}>{props.data}</span>)
}

export default Span;