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
	}
}

const StyledH1 = styled.h1`
	font-size: 3rem;
	text-transform: uppercase;
	color: white;
	font-family: 'Courier New', Courier, monospace;
	font-weight: lighter;
`;

const StyledH2 = styled.h2`
	font-size: 2.6rem;
	text-transform: uppercase;
	padding-bottom: 9px;
`;

const StyledH3 = styled.h3`
	font-size: 2rem;
	text-transform: uppercase;
	padding-bottom: 9px;
`;

const StyledP = styled.p`
	font-size: 1.6rem;
	padding-bottom: 12px;
	word-wrap: break-word;
`;

const StyledSpan = styled.span`
	font-size: 1.6rem;
	padding-bottom: 12px;
	word-wrap: break-word;
`;
