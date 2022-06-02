import styled from 'styled-components';

export const WrapperFieldset = styled.div`
	display: grid;
	grid-template-rows: repeat(1, 1fr);
	justify-content: center;
	width: 80vw;
	padding: 1rem;
	margin-left: 8rem;
	background: linear-gradient(
		45deg,
		rgba(59, 173, 227, 1) 0%,
		rgba(87, 111, 230, 1) 25%,
		rgba(152, 68, 183, 1) 51%,
		rgba(255, 53, 127, 1) 100%
	);
`;

export const Fieldset = styled.fieldset`
	border: none;
`;

export const LabelRadio = styled.label`
	font-size: 1.6rem;
	color: white;
	padding: 20px;
`;
