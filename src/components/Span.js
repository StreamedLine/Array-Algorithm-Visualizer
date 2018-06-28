import React from 'react';

function Span(props) {
	return (<span className={props.color + ' arrElement'}>{props.data}</span>)
}

export default Span;