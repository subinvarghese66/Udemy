import React, { Component } from 'react';
import logo from './logo.svg';
import './Hello.css';
import 'tachyons'
const Hello = (props) => {
	return (
	    	<div className='f1 tc'>
	    		<h1>Hello World</h1>
	    		<p>{props.greeting}</p>
	    	</div>
	    );
}
export default Hello;