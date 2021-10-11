import styled from "styled-components";

export const Container = styled.button`
	padding: 0.5em 1em;
	background: var(--orange-light);
	border-radius: 2em;
	font-size: 1em;
	color: #fff;
	transition: filter, 0.2s;
	&:hover {
		filter: brightness(90%);
	}
	&.outline {
		border: var(--orange-light) 1px solid;
		color: var(--orange-light);
		background: none;
		&:hover {
			color: #fff;
			background: var(--orange-light);
		}
	}
`
