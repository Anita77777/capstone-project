import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	color: black;
	align-items: center;
	margin-top: 7rem;
	text-align: start;
	width: 100%;
	background-color: black;
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
	gap: 2rem;
	background-color: whitesmoke;
	border: solid palevioletred;
	border-width: 0.3rem;
	margin-bottom: 2.5rem;
`;

export const Formcomment = styled.textarea`
	display: flex;
	text-align: start;
	color: black;
	height: 10rem;
	width: 100%;
	align-content: start;
	word-wrap: wrap;
	background-color: white;
	margin-bottom: 4rem;
	border: solid palevioletred;
	border-width: 0.3rem;
`;

export const Label = styled.label`
	display: flex;
	color: white;
	justify-content: center;
	font-size: 2rem;
`;
