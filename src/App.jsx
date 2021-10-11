import { Header } from "./components/Header/Index";
import { Home } from "./pages/Home/Index";
import { GlobalStyle } from "./styles/global";

export function App () {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Home />
		</>
	)
}
