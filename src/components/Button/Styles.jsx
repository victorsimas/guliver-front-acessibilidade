import styled from "styled-components";

export const Container = styled.button`
	padding: 0.5em 1em;
	background: var(--orange-light);
	border-radius: 2em;
	font-size: 1em;
	font-weight: bold;
	color: #fff;
	transition: filter, 0.5s;
	&:hover {
		filter: brightness(90%);
	}
	&.outline {
		border: var(--orange-light) 2px solid;
		color: var(--orange-light);
		background: none;
	}
`
