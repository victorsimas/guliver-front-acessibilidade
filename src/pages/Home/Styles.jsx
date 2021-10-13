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
	& .nav-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
		padding: 1em 0;
		margin-bottom: 2em;
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
	& .culture > div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
		& > div {
			flex: 2;
			padding: 0.5em;
		}
		& .image {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	& .culture {
		@media (max-width: 720px) {
			& > div {
				flex-direction: column-reverse;
			}
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
