import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 1em;
	padding: 1em;
	border: #ccc 1px solid;
	border-radius: 0.5em;
	margin: 1em 0;
	& .image {
		width: 300px;
		& img {
			border-radius: 0.5em;
		}
	}
	& .text {
		max-width: 600px;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
	& h2 {
		color: var(--orange-dark);
		&:after {
			content: "";
			width: 1.5em;
			height: 3px;
			background: var(--orange-dark);
			display: block;
			margin: 0.3em 0;
		}
	}
	& span {
		color: var(--grey-text);
		display: flex;
		align-items: center;
		gap: 1em;
	}
	& p {
		color: var(--grey-text);
		line-height: 1.5;
	}
`
