import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }


body {
 min-height: 100%;
 position: relative;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
	  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
	  sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	min-height: 100%;
	background-color: ${(props) => props.theme.backgroundColorDark};
	color: ${(props) => props.theme.color};
	font-size: ${(props) => props.theme.fontSizeDefault};
	line-height: ${(props) => props.theme.lineHeightDefault};
  }

`;



