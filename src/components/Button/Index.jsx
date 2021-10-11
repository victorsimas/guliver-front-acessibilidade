import React from 'react'
import { Container } from './Styles'

export function Button({children, outline}){
	return (
		<Container className={outline ? 'outline' : ''}>
			{children}
		</Container>
	)
}
