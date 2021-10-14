import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Index";
//import DicasUteis from "../../components/DicasUteis";
import { H1Title } from "../../components/H1";
import { H1 } from "../../components/H1/index";
import { H2 } from "../../components/H2/Index";
import { HowToGetThere } from "../../components/HowToGetThere/Index";
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
				<H1>
					Você está em {locationJSON.title}
				</H1>
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
					<H2>
						História de {locationJSON.title}
					</H2>
					<p>
						{locationJSON.history?.text}
					</p>
					<Button outline>Ler mais</Button>
				</section>
			</Container>
			<HowToGetThere location={locationJSON.title}/>
			<Container>
				<section className="culture">
					<H2>Cultura de {locationJSON.title}</H2>
					<div>
						<div>
							<p>{locationJSON.culture?.text}</p>
							<Button outline>
								Ler mais
							</Button>
						</div>
						<div className="image">
							<img src={locationJSON.culture?.img}
								alt={`cultura de ${locationJSON.title}`} />
						</div>
					</div>
				</section>
			</Container>

			
		</>
	)
}

