import styled from 'styled-components';

export const CardContainer = styled.li`
	display: flex;
	align-items: center;
	flex-direction: column;
	border-radius: 20px;
	height: 45rem;
	width: 90%;
	text-align: center;
	line-height: 30px;
	color: black;
	border: solid palevioletred;
	border-width: 0.3rem;
	padding: 5rem;
	font-family: 'Courier New', Courier, monospace;
	background-color: black;
	margin: 2rem;
`;

export const WrapperComment = styled.input`
	display: flex;
	flex-wrap: wrap;
	border: solid palevioletred;
	min-height: 100px;
	width: 100%;
	font-size: 1.6rem;
	word-wrap: break-word;
	font-family: 'Courier New', Courier, monospace;
`;

export const CardWrapper = styled.ul`
	display: flex;
	justify-content: column;
	color: black;
	margin-top: 6rem;
	text-align: start;
	width: 100%;
	background-color: black;
	top: 0;
`;
