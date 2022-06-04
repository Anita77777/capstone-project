import GlobalStyles from '../src/components/UI/GlobalStyles/GlobalStyles';
import Layout from '../src/components/Layout/Layout';
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
