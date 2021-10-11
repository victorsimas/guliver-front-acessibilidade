import styled from "styled-components";

export const Container = styled.header`
	background: #fff;
	width: 100vw;
	box-shadow: 0 2px 6px 0 rgba(0,0,0,0.1);
	margin-bottom: 2px;
	& .content {
		width: 100%;
		max-width: 1280px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: auto;
		padding: 0 1em;
	}
	& .logo {
		width: 8em;
		cursor: pointer;
	}
	& .menu {
		width: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	& img {
		width: 100%;
	}
`
