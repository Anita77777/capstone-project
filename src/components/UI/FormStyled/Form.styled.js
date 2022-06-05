import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	color: black;
	align-items: center;
	margin-top: 6rem;
	text-align: start;
	width: 100%;
	background-color: black;
	top: 0;
`;

export const Formfield = styled.input`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	color: black;
	display: flex;
	flex-wrap: wrap;
	height: 3rem;
	width: 100%;
	background-color: whitesmoke;
	border: solid palevioletred;
	border-width: 0.3rem;
	margin-bottom: 2rem;
	font-family: 'Courier New', Courier, monospace;
	font-size: 1.4rem;
`;

export const Formcomment = styled.textarea`
	display: flex;
	text-align: start;
	color: black;
	height: 10rem;
	width: 100%;
	align-content: start;
	word-wrap: wrap;
	background-color: whitesmoke;
	margin-bottom: 3rem;
	border: solid palevioletred;
	border-width: 0.3rem;
	font-family: 'Courier New', Courier, monospace;
	font-size: 1.4rem;
`;

export const Label = styled.label`
	display: flex;
	color: white;
	padding: 0.2rem;
	justify-content: center;
	font-size: 2rem;
	font-family: 'Courier New', Courier, monospace;
	font-weight: bolder;
`;
