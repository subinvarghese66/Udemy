import React, { Component } from 'react';
import Card from './Card.js';
const CardArray = ({robots}) =>{
	return(
			<div>
			{
				robots.map((robot)=>{
					return(
						<Card  
						key={robot.id}
						id={robot.id} 
						name={robot.name}	
						username={robot.username} 
						email={robot.email}  
						/> 
					);
				})
			}
			</div>
			)
}
export default CardArray;