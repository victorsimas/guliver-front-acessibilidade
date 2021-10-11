import { Button } from "../../components/Button/Index";
import { H1Title } from "../../components/H1Title";
import { Container } from "./Styles";

export function Home() {
	return (
		<>
			<Container>
				<main>
					<H1Title title="Navegue por locais turísticos"/>
					<div className="nav-bar">
						<Button>Todos</Button>
						<Button outline>Praias</Button>
						<Button outline>Turismo Histórico</Button>
						<Button outline>Natureza</Button>
						<Button outline>Internacional</Button>
						<Button outline>Em alta</Button>
					</div>
				</main>
			</Container>
		</>
	)
}
