import styled, { css } from 'styled-components';

export const Button = styled.button`
	${({ variant = 'delete' }) =>
		variant === 'delete' &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			align-self: center;
			color: white;
			font-weight: bold;
			width: 100px;
			height: 3.2rem;
			padding: 5px;
			border: none;
			position: relative;
			margin-top: 20px;
			background: linear-gradient(45deg, var(--gradient));
		`}

	${({ variant = 'edit' }) =>
		variant === 'edit' &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			align-self: center;
			color: white;
			font-weight: bold;
			width: 100px;
			height: 3.2rem;
			padding: 5px;
			border: none;
			position: relative;
			margin-top: 20px;
			background: linear-gradient(45deg, var(--gradient));
		`}


${({ variant = 'submit' }) =>
		variant === 'submit' &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			font-weight: bold;
			width: 11rem;
			height: 4rem;
			padding: 0.5rem;
			border: none;
			margin-top: 2rem;
			position: absolute;
			margin-left: 35vw;
			background: linear-gradient(45deg, var(--gradient));

			span {
				position: relative;
				top: 16px;
			}
		`}
`;
