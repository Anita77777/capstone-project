import GlobalStyles from '../src/components/GlobalStyles';
import Layout from '../src/components/Layout';
function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Layout />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
