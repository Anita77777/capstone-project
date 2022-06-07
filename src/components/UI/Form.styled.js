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
`;

export const WrapperList = styled.ul`
	display: flex;
	color: white;
	list-style-type: none;
	padding: 15px;
	flex-wrap: wrap;
	background-color: black;
	justify-content: center;
`;

export const SearchField = styled.input`
	display: flex;
	justify-content: start;
	height: 4rem;
	width: 30rem;
	background-color: white;
	color: black;
	border: none;
`;

export const ContainerSearch = styled.div`
	display: flex;
	width: 90%;
	border: solid palevioletred;
	background-color: white;
	margin-left: 10px;
`;

export const WrapperImageForm = styled.div`
	display: flex;
	justify-content: center;
	box-shadow: 1px 1px 5px 1px grey;
	background-color: whitesmoke;
	width: 80%;
	gap: 20px;
`;
