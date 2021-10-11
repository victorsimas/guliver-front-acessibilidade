import styled from "styled-components";

export const Container = styled.header`
	background: #fff;
	width: 100vw;
	box-shadow: 0 4px 10px 0 rgba(0,0,0,0.15);
	& .content {
		width: 100%;
		max-width: 1112px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: auto;
		padding: 0 1em;
	}
	& .logo {
		width: 8em;
	}
	& .menu {
		width: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	& img {
		width: 100%;
	}
`
