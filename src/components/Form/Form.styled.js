import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: none;

	align-items: center;
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
