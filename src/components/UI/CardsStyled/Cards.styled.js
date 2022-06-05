import styled from 'styled-components';

export const CardContainer = styled.li`
	display: flex;
	flex-direction: column;
	align-self: center;
	border-radius: 20px;
	width: 100%;
	background-color: white;
	text-align: center;
	line-height: 30px;
	color: black;
	border: solid palevioletred;
	border-width: 0.3rem;
	padding: 5rem;
	margin-top: 2rem;
`;

export const WrapperComment = styled.input`
	display: flex;
	text-align: start;
	align-self: center;
	flex-wrap: wrap;
	border: solid palevioletred;
	min-height: 100px;
	width: 300px;
	font-size: 1.6rem;
	overflow-wrap: break-word;
`;

export const CardWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 5rem;
	padding: 1rem;
	width: 37rem;
	flex-wrap: wrap;
`;
