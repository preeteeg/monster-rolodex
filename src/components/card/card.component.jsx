import React from 'react'
import './card.styles.css'
export const Card = props=>(
<div className="card-container">
	<img alt="monster"  src={`https://robohash.org/${props.monster.id}?set=set2/size=130x130`} />
	<h3 className="card-name">{props.monster.name}</h3>
	<p className="card-detail">{props.monster.email}</p>
</div>
)