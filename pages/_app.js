import GlobalStyles from '../src/components/GlobalStyles';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
