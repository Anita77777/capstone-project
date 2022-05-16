import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: none;
	align-items: center;
	text-align: start;
	width: 80vh;
`;

export const Formfield = styled.input`
	color: grey;
	font-weight: bold;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: 50px;
	width: 500px;
	gap: 20px;
	margin: 20px;
`;

export const Formcomment = styled.input`
	color: grey;
	font-weight: bold;
	height: 200px;
	width: 500px;
	margin: 20px;
`;

export const CardContainer = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: solid black;
	margin: 120px;
	align-items: center;
	width: 500px;
	height: 400px;
	border-radius: 10px;
	box-shadow: 10px 10px 10px 10px lightgrey;
`;

export const Card = styled.li`
	list-style-type: none;
`;
