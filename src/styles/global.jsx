import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
	  --grey-bg: #E7E7E7;
	  --orange-light: #F2762E;
	  --orange-dark: #F23927;
	  --grey-text: #454545;
  }
  * {
	  padding: 0;
	  margin: 0;
	  box-sizing: border-box;
	  border: none;
  }
  body {
	  font-family: 'Raleway', sans-serif;
	  background: var(--grey-bg);
  }
  img {
	  max-width: 100%;
  }
  button {
	  cursor: pointer;
  }
`
