import Footer from './Footer/Footer';

export default function Layout({ children }) {
	return (
		<>
			<Footer />
			<main>{children}</main>
		</>
	);
}
