import styled from 'styled-components';

export const WrapperFieldset = styled.div`
	display: grid;
	grid-template-rows: repeat(1, 1fr);
	justify-content: center;
	width: 100%;
	padding: 1rem;
	background: linear-gradient(45deg, var(--gradient));
`;

export const Fieldset = styled.fieldset`
	border: none;
`;

export const LabelRadio = styled.label`
	font-size: 1.6rem;
	color: white;
	padding: 20px;
`;
