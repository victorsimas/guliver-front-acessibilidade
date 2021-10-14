import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	max-width: 1080px;
	background: #F9EFE3;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	height: 300px;
	& p {
		margin-top: 1em;
		margin-left: 0.5em;
		max-width: 280px;
		line-height: 1.5;
		color: var(--grey-text);
	}
	& > div {
		padding: 2em 4em;
		flex: 2;
	}
	& .search-input {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	& input {
		margin: .5em 0;
		height: 3em;
		padding: 1.2em;
		border-radius: 2em 0 0 2em;
	}
	& button {
		margin: .5em 0;
		height: 3em;
		padding: 1.2em;
		border-radius: 0 2em 2em 0;
		background: var(--orange-dark);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		img {
			width: 1.2em;
			margin-right: 0.2em;
		}
	}
	& iframe {
		flex: 2;
		width: 100%;
		height: 100%;
	}
	@media (max-width: 780px) {
		iframe {
			display: none;
		}
	}
	@media (max-width: 420px) {
		.search-input {
			flex-wrap: wrap;
			flex: 1;
		}
		input,
		button {
			border-radius: 2em;
		}
	}
`
