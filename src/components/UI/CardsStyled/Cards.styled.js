import styled from 'styled-components';

export const CardContainer = styled.li`
	display: flex;
	flex-direction: column;
	align-self: center;
	border-radius: 20px;
	width: inherit;
	background-color: white;
	text-align: center;
	line-height: 30px;
	color: black;
	border: solid palevioletred;
	border-width: 0.3rem;
	padding: 5rem;
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

export const CardWrapper = styled.ul`
	display: flex;
	justify-content: center;
	margin-top: 7rem;
	padding: 1rem;
	width: 37rem;
`;
