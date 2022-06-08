import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	color: black;
	align-items: center;
	margin-top: 7rem;
	text-align: start;
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
	width: 40rem;
	background-color: whitesmoke;
	border: solid palevioletred;
	border-width: 0.3rem;
	margin-bottom: 2rem;
	font-size: 1.4rem;
`;

export const Formcomment = styled.textarea`
	display: flex;
	text-align: start;
	color: black;
	height: 10rem;
	width: 40rem;
	align-content: start;
	word-wrap: wrap;
	background-color: whitesmoke;
	margin-bottom: 3rem;
	border: solid palevioletred;
	border-width: 0.3rem;
	font-size: 1.4rem;
	flex-wrap: wrap;
`;

export const Label = styled.label`
	display: flex;
	color: white;
	padding: 0.2rem;
	justify-content: center;
	font-size: 2rem;
	font-weight: bolder;
	margin-top: 20px;
`;

export const WrapperList = styled.ul`
	display: flex;

	list-style-type: none;
	flex-wrap: wrap;
	background-color: black;
	width: 40rem;
	margin: 25px;
	gap: 30px;
`;

export const ContainerSearch = styled.div`
	display: flex;
	align-items: center;
	border: solid palevioletred;
	background-color: white;
	width: 40rem;
	margin: 20px;
`;

export const SearchField = styled.input`
	display: flex;
	height: 4rem;
	width: 100%;
	background-color: white;
	color: black;
	border: none;
`;

export const WrapperImageForm = styled.div`
	display: flex;
	box-shadow: 1px 1px 5px 1px grey;
	width: 100%;
	background-color: black;
`;

export const WrapperButtonForm = styled.div`
	display: flex;
	background-color: black;
	margin-top: 50px;
	justify-content: center;
`;
