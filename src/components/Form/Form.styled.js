import styled from 'styled-components';

export const Container = styled.div`
	color: black;
	display: flex;
	flex-direction: column;
	justify-content: start;
	text-align: start;
	width: 100vw;
	margin: 20px;
	padding: 100px;
	background-color: #694370;
`;

export const Formfield = styled.input`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	color: white;
	font-weight: bold;
	display: flex;
	flex-wrap: wrap;
	height: 50px;
	width: 80vw;
	margin: 20px;
	background-color: #2a2a2a;
`;

export const Formcomment = styled.textarea`
	display: flex;
	text-align: start;
	color: white;
	font-weight: bold;
	height: 200px;
	width: 80vw;
	align-content: start;
	margin: 20px;
	word-wrap: wrap;
	background-color: #2a2a2a;
`;

export const Label = styled.label`
	display: flex;
	color: white;
	justify-content: start;
	margin-left: 20px;
	font-size: 20px;
	font-weight: bold;
`;
