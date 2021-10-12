import { Container } from "./Styles";
import logoImg from "../../assets/logo-white.svg";

export function Footer () {
	return (
		<Container>
			<div>
				<div className="logo">
					<img src={logoImg} alt="Gulliver" />
				</div>
				<hr />
				<div>
					<strong>Gulliver Traveller</strong>
					<p>Esse site é um MVP da aplicação Gulliver Traveller.
					<br />Muitos recursos ainda serão implementados.
					</p>
				</div>
			</div>
		</Container>
	)
}
