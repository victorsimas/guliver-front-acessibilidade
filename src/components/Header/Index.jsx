import { Container } from "./Styles";
import logoImg from "../../assets/logo.svg";
import menuImg from "../../assets/menu.svg"

export function Header() {
	return (
		<Container>
			<div className="content">
				<div className="logo">
					<img src={logoImg} alt="Início"/>
				</div>
				<div className="menu">
					<img src={menuImg} alt="Menu"/>
				</div>
			</div>
		</Container>
	)
}
