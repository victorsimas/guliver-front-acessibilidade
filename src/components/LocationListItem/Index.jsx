import React from 'react'
import { RatingStars } from '../RatingStars/Index'
import { Container } from './Styles'

export function LocationListItem({img,
	title,
	text,
	rating
}) {
	return (
		<Container>
			<div className="image">
				<img src={img} alt={title} />
			</div>
			<div className="text">
				<h2>{title}</h2>
				<span>Nota {rating} {RatingStars(rating)} </span>
				<p>{text}</p>
			</div>
		</Container>
	)
}
