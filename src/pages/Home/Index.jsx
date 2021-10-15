import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Index";
import { CultureSection } from "../../components/CultureSection/Index";
import DicasUteis from "../../components/DicasUteis/Index";
import { GastronomySection } from "../../components/GastronomySection/Index";
import { H1 } from "../../components/H1/index";
import { H2 } from "../../components/H2/Index";
import { HowToGetThere } from "../../components/HowToGetThere/Index";
import { NightLifeSection } from "../../components/NightLifeSection/Index";
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
				<DicasUteis />
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
				<CultureSection location={locationJSON} />
				<GastronomySection location={locationJSON} />
				<NightLifeSection location={locationJSON} />
			</Container>


		</>
	)
}

