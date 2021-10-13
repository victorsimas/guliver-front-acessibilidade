import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Index";
import { H1Title } from "../../components/H1Title";
import { api } from "../../services/api";
import { Banner, Container } from "./Styles";

export function Home(){
	const [ locationJSON, setLocationJSON ] = useState([]);

	useEffect(() => {
		api.get('locations')
		.then(resp => setLocationJSON(resp.data));
	}, []);

	return (
		<>
			<Banner className="banner">
				<img src={locationJSON.img} alt={''} />
			</Banner>
			<Container>
				<H1Title>
					Você está em {locationJSON.title}
				</H1Title>
				<div className="nav-bar">
						<Button>Dicas úteis</Button>
						<Button outline>História</Button>
						<Button outline>Como chegar</Button>
						<Button outline>Cultura</Button>
						<Button outline>Gastronomia</Button>
						<Button outline>Parques</Button>
						<Button outline>Vida noturna</Button>
						<Button outline>Entretenimento</Button>
						<Button outline>Alugue o seu carro</Button>
					</div>
				<section>

				</section>
			</Container>
		</>
	)
}

