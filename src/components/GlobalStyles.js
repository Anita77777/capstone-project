import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	:root {
		--primary-color: crimson;
		--secondary-color: navy;
	}
	body {
		margin: 0;
		font-family: 'Roboto', sans-serif;
        max-width: 600px;
}

h1, h2, h3, h4, h5, h6 {
   margin: 0;
}


	
`;

export default GlobalStyle;
