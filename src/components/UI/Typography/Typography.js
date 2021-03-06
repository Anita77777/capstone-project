import styled from 'styled-components';

export default function Typography({ children, variant, component, ...rest }) {
	switch (variant) {
		case 'h2':
			return (
				<StyledH2 {...rest} as={component}>
					{children}
				</StyledH2>
			);
		default:
			return (
				<StyledP {...rest} as={component}>
					{children}
				</StyledP>
			);

		case 'span':
			return (
				<StyledSpan {...rest} as={component}>
					{children}
				</StyledSpan>
			);

		case 'h1':
			return (
				<StyledH1 {...rest} as={component}>
					{children}
				</StyledH1>
			);

		case 'h3':
			return (
				<StyledH3 {...rest} as={component}>
					{children}
				</StyledH3>
			);
		case 'p':
			return (
				<TextBookmark {...rest} as={component}>
					{children}
				</TextBookmark>
			);
		case 'h4':
			return (
				<TextTitle {...rest} as={component}>
					{children}
				</TextTitle>
			);
	}
}

const StyledH1 = styled.h1`
	font-size: 4rem;
	text-transform: uppercase;
	color: white;

	font-weight: lighter;
`;

const StyledH2 = styled.h2`
	font-size: 2.6rem;
	text-transform: uppercase;
	padding-bottom: 9px;

	color: white;
`;

const StyledH3 = styled.h3`
	font-size: 1.7rem;
	text-transform: uppercase;
	padding-bottom: 9px;

	color: white;
`;

const StyledP = styled.p`
	font-size: 1.6rem;
	padding-bottom: 12px;
	word-wrap: break-word;

	color: white;
`;

const StyledSpan = styled.span`
	font-size: 1.4rem;

	word-wrap: break-word;

	color: white;
	text-align: center;
`;

export const TextBookmark = styled.p`
	justify-content: space-between;
	font-size: 1.4rem;
	color: black;

	font-weight: bolder;
`;

export const TextTitle = styled.h4`
	justify-content: space-between;
	font-size: 1.6rem;
	color: white;

	font-weight: bolder;
`;
