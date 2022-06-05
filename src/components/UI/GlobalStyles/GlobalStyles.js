import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
  font-size: 62.5%;
  font-family: Roboto Mono, sans-serif;
  overflow: hidden;
  overflow-y:auto; 
}

body {
  padding: 0;
	margin: 0;
  background-color: black; 
  
  
  
}


:root {
--gradient: rgba(59, 173, 227, 1) 0%,
  rgba(87, 111, 230, 1) 25%,
  rgba(152, 68, 183, 1) 51%,
  rgba(255, 53, 127, 1) 100%;
  font-family: 'Courier New', Courier, monospace;

}


`;

export default GlobalStyle;
