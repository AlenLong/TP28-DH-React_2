import React from 'react'
import Dashboard from './Dashboard'


/* import { ReactPropTypes } from 'react' */

function ContentRowMovies() {

	let dash = [{
		titulo : 'Movies in Data Base', 
		color : 'border-left-warning',
		cifra : '21',
		icono : 'fa-film'
	},
	{
		titulo : 'Total awards', 
		color : 'border-left-success',
		cifra : '79',
		icono : 'fa-award'
	},
	{
		titulo : 'Actors quantity', 
		color : 'border-left-primary',
		cifra : '49',
		icono : 'fa-user'
	}
]

  return (

	<div className="row">

	{dash.map(card => 
		<Dashboard/>

	)}


</div>
  )
}

export default ContentRowMovies
