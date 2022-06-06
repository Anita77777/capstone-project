import styled from 'styled-components';

export const CardContainer = styled.li`
	display: flex;
	align-items: center;
	flex-direction: column;
	border-radius: 20px;
	height: 50rem;
	width: 100%;
	text-align: center;
	line-height: 30px;
	color: black;
	border: solid palevioletred;
	border-width: 0.3rem;
	padding: 6rem;
	background-color: black;
	margin: 2rem;
	flex-grow: 5;
`;

export const WrapperComment = styled.input`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	border: solid palevioletred;
	min-height: 100px;
	width: 70%;
	font-size: 1.6rem;
	word-wrap: wrap;
	text-align: start;
	position: absolute;
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
	flex-wrap: wrap;
`;

export const WrapperButton = styled.div`
	display: flex;
	flex-direction: column;
	background-color: none;
	width: 80%;
	position: absolute;
	margin: 300px;
	align-items: center;
	text-decoration: none;
	height: 200px;
	gap: 10px;
`;
export const LinkGood = styled.a`
	text-decoration: none;
`;
