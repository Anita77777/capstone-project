import styled from 'styled-components';

export const CardContainer = styled.li`
	display: flex;
	flex-direction: column;
	align-self: center;
	padding: 30px;
	margin-top: 70px;
	border-radius: 20px;
	width: 33rem;
	display: flex;
	flex-direction: column;
	background-color: white;
	text-align: center;
	line-height: 30px;
	color: black;
	border: solid palevioletred;
	border-width: 0.3rem;
`;

export const WrapperComment = styled.input`
	display: flex;
	align-self: center;
	flex-wrap: wrap;
	border: solid palevioletred;
	min-height: 100px;
	width: 200px;
	font-size: 1.6rem;
	overflow-wrap: break-word;
`;

export const CardGrid = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
