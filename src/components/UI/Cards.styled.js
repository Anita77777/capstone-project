import styled from 'styled-components';

export const CardWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: start;
	width: 90%;
	height: 400px;
	background-color: black;
	margin-top: 60px;
	gap: 20px;
	margin-left: 20px;
	border-radius: 20px;
	border: solid palevioletred;
`;

export const WrapperComment = styled.textarea`
	border: solid palevioletred;
	height: 100px;
	width: 280px;
	font-family: 'Courier New', Courier, monospace;
	font-weight: bolder;
`;

export const WrapperButton = styled.div`
	display: flex;
	gap: 15px;
	margin-left: -4px;
	margin-bottom: 20px;
`;
export const LinkGood = styled.a`
	text-decoration: none;
`;

export const WrapperImage = styled.div`
	display: flex;
	flex-direction: row-reverse;
	background-color: black;
	margin: 25px;

	gap: 50px;
`;

export const WrapperTitleCard = styled.div`
	display: flex;

	justify-content: center;
	flex-direction: column;
	width: 200px;
`;
