import ContainerSectionCard from "./components/ContainerSectionCard/Index";
import { Footer } from "./components/Footer/Index";
import { Header } from "./components/Header/Index";
import { Home } from "./pages/Home/Index";

import { GlobalStyle } from "./styles/global.js";
import DicasUteis from "./components/DicasUteis/Index";

export function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Home />
			<Footer />
		</>
	)
}
