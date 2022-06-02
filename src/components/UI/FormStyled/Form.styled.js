import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	color: black;
	justify-content: start;
	margin-top: 7rem;
	text-align: start;
	width: 100vw;
	background-color: black;
`;

export const Formfield = styled.input`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	color: black;
	font-weight: bold;
	display: flex;
	flex-wrap: wrap;
	height: 3rem;
	gap: 2rem;
	width: 80vw;
	margin-left: 8rem;
	background-color: whitesmoke;
	border: solid palevioletred;
	border-width: 0.3rem;
	position: relative;
	margin-bottom: 2rem;
`;

export const Formcomment = styled.textarea`
	display: flex;
	text-align: start;
	color: black;
	font-weight: bold;
	height: 10rem;
	width: 80vw;
	align-content: start;
	margin-left: 8rem;
	gap: 2rem;
	word-wrap: wrap;
	background-color: white;
	margin-bottom: 4rem;
	border: solid palevioletred;
	border-width: 0.3rem;
	position: relative;
`;

export const Label = styled.label`
	display: flex;
	color: white;
	justify-content: center;
	font-size: 2rem;
	margin-top: 2rem;
	padding: 2rem;
`;
