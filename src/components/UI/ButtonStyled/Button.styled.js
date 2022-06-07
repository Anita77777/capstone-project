import styled, { css } from 'styled-components';

export const Button = styled.button`
	${({ variant = 'delete' }) =>
		variant === 'delete' &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			font-weight: bold;
			width: 75px;
			height: 3.2rem;
			padding: 5px;
			border: none;
			font-family: 'Courier New', Courier, monospace;
			background: linear-gradient(45deg, var(--gradient));
			position: sticky;
		`}

	${({ variant = 'edit' }) =>
		variant === 'edit' &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			font-weight: bold;
			width: 75px;
			height: 3.2rem;
			padding: 5px;
			border: none;
			font-family: 'Courier New', Courier, monospace;
			background: linear-gradient(45deg, var(--gradient));
			position: sticky;
		`}
		${({ variant = 'Goodreads' }) =>
		variant === 'Goodreads' &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			font-weight: bold;
			width: 75px;
			height: 3.2rem;
			padding: 5px;
			border: none;
			font-family: 'Courier New', Courier, monospace;
			background-color: green;
			position: sticky;
		`}


${({ variant = 'submit' }) =>
		variant === 'submit' &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			margin-left: 7rem;
			color: white;
			font-weight: bold;
			width: 15rem;
			height: 3.2rem;
			padding: 0.5rem;
			border: none;
			margin-top: 2.5rem;
			background: linear-gradient(45deg, var(--gradient));
			span {
				top: 16px;
			}
			font-family: 'Courier New', Courier, monospace;
			font-weight: bolder;
		`}

${({ variant = 'Home' }) =>
		variant === 'Home' &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			font-weight: bold;
			width: 20rem;
			height: 6.5rem;
			margin: 8rem;
			margin-left: 8rem;
			border: none;
			background: linear-gradient(45deg, var(--gradient));
			font-family: 'Courier New', Courier, monospace;
			font-weight: bolder;
			span {
				top: 16px;
			}
			border-radius: 10px 10px 10px 10px;
			font-size: 1.6rem;
		`}


${({ variant = 'Search' }) =>
		variant === 'Search' &&
		css`
			background: white;
			border: palevioletred;
		`}
`;
