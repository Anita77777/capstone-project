import styled from 'styled-components';

export const Fieldset = styled.fieldset`
	display: flex;
	border: none;
	height: 3rem;
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
	margin-left: 10vw;
	padding-left: 2rem;
	width: 80vw;
	background: linear-gradient(
		45deg,
		rgba(59, 173, 227, 1) 0%,
		rgba(87, 111, 230, 1) 25%,
		rgba(152, 68, 183, 1) 51%,
		rgba(255, 53, 127, 1) 100%
	);
`;

export const LabelRadio = styled.label`
	display: flex;
	justify-content: space-around;
	font-size: 1.6rem;
	display: flex;
	color: white;
	padding: 1rem;
`;
