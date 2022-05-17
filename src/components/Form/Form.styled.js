import styled from 'styled-components';

export const Container = styled.div`
	color: black;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	text-align: start;
	width: 100vh;
	margin: 20px;
	padding: 100px;
`;

export const Formfield = styled.input`
	display: flex;
	flex-direction: column;
	color: black;
	font-weight: bold;
	display: flex;
	flex-wrap: wrap;
	height: 50px;
	width: 500px;
	margin: 20px;
	background-color: lightblue;
`;

export const Formcomment = styled.textarea`
	color: black;
	font-weight: bold;
	height: 200px;
	width: 500px;
	align-content: start;
	margin: 20px;
	word-wrap: wrap;
	background-color: lightblue;
`;

export const CardContainer = styled.ul`
	display: flex;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	padding: 50px;
	border: solid black;
	margin: 110px;
	width: 500px;
	height: 300px;
	border-radius: 10px;
	box-shadow: 10px 10px 10px 10px lightgrey;
	list-style-type: none;
	margin-top: 50px;
	line-height: 25px;
	color: blue;
`;
