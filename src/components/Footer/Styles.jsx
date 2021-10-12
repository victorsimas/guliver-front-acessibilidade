import styled from "styled-components";

export const Container = styled.footer`
	background: var(--grey-text);
	padding: 4em 0;
	color: #fff;
	text-align: center;
	line-height: 2;
	margin-top: 2em;
	& > div {
		width: 100%;
		max-width: 1080px;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`
