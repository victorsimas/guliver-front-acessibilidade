import React from 'react'

export function LocationListItem({img,
	title,
	text,
	rating
}) {
	return (
		<div>
			<div>
				<img src={img} alt={title} />
			</div>
			<div>
				<h2>{title}</h2>
				<div>{rating}</div>
				<p>{text}</p>
			</div>
		</div>
	)
}
