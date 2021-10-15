import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 1080px;
	background: #fff;
	margin: 0 auto;
	padding: 2em 2em;
	& h1 {
		padding: 1em 0 0;
	}
	& section {
		padding: 2em 2.5em;
		& p {
			padding: 1em 0;
			color: var(--grey-text);
			line-height: 1.5;
			font-size: 1.2em;
		}
	}
`

export const Banner = styled.div`
	width: 100%;
	max-width: 1080px;
	background: #fff;
	margin: 0 auto;
	& img {
		width: 100%;
		height: 250px;
		object-fit: cover;
	}
`
