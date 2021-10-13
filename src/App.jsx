import { Footer } from "./components/Footer/Index";
import { Header } from "./components/Header/Index";
import { Home } from "./pages/Home/Index";
import { GlobalStyle } from "./styles/global";

export function App () {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Home />
			<Footer />
		</>
	)
}
