import ContainerSectionModel from "./components/ContainerSectionModel/Index";
import ContainerSectionCard from "./components/ContainerSectionCard/Index";
import { Footer } from "./components/Footer/Index";
import { Header } from "./components/Header/Index";
import { Home } from "./pages/Home/Index";
<<<<<<< HEAD
import { GlobalStyle } from "./styles/global";
import ComoChegar from "./components/ComoChegar/Index";
import DicasUteis from "./components/DicasUteis/Index";
=======
import { GlobalStyle } from "./styles/global.js";
>>>>>>> 6101ab57e38e7e11d2c8b5432969bcc7ee4b358e


export function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Home />
			<DicasUteis />

			<ContainerSectionCard />
			<ContainerSectionModel />
			<ComoChegar />
			<Footer />
		</>
	)
}
