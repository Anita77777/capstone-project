import styled from 'styled-components';

export const Container = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	background-color: #56144d;
	text-align: start;
	width: 100vh;
	margin: 20px;
	padding: 100px;
`;

export const Formfield = styled.input`
	display: flex;
	flex-direction: column;
	color: grey;
	font-weight: bold;
	display: flex;
	flex-wrap: wrap;
	height: 50px;
	width: 500px;
	gap: 20px;
	margin: 20px;
`;

export const Formcomment = styled.textarea`
	color: grey;
	font-weight: bold;
	height: 200px;
	width: 500px;
	align-content: start;
	margin: 20px;
`;

export const CardContainer = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: solid black;
	align-items: center;
	margin: 200px;
	width: 500px;
	height: 400px;
	border-radius: 10px;
	box-shadow: 10px 10px 10px 10px lightgrey;
`;

export const Card = styled.li`
	list-style-type: none;
`;
