import styled from 'styled-components';

export const CardContainer = styled.ul`
	display: flex;
	justify-content: center;
	text-align: center;
	word-wrap: break-word;
	flex-direction: column;
	padding: 50px;
	border: solid black;
	margin: 200px;
	width: 400px;
	height: 500px;
	border-radius: 10px;
	box-shadow: 10px 10px 10px 10px lightgrey;
	list-style-type: none;
	margin-top: 50px;
	line-height: 25px;
	color: blue;
`;

export const WrapperComment = styled.section`
	border: solid lightgrey;
	box-shadow: inset 1px 1px 1px 1px lightgrey;
	height: 100px;
`;
