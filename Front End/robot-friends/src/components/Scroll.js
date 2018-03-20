import React, { Component } from 'react';
import 'tachyons';
const Scroll = (props) => {
	return (
		<div style={{overflowY : 'scroll', border : '2px solid lightgreen', height : '500px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;