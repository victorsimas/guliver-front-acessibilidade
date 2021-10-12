import React from 'react'
import { Container } from './Styles'

export function Button({children, outline, onClick}){
	return (
		<Container
			className={outline ? 'outline' : ''}
			onClick={onClick}>
			{children}
		</Container>
	)
}
