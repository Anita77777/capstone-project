import styled from 'styled-components';

export const SubmitButton = styled.button`
	color: white;
	font-weight: bold;
	width: 100px;
	height: 30px;
	padding: 5px;
	border: none;
	margin-top: 15px;
	margin-left: 35vw;
	background: linear-gradient(
		45deg,
		rgba(59, 173, 227, 1) 0%,
		rgba(87, 111, 230, 1) 25%,
		rgba(152, 68, 183, 1) 51%,
		rgba(255, 53, 127, 1) 100%
	);

	span {
		position: relative;
		top: 16px;
	}
`;
