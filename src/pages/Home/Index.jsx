import { Button } from "../../components/Button/Index";
import { H1Title } from "../../components/H1Title";
import { LocationListItem } from "../../components/LocationListItem/Index";
import { Container } from "./Styles";
import { api } from "../../servies/api";
import { useEffect, useState } from "react";

export function Home() {
	const [ locationsJSON, setLocationsJSON ] = useState([]);

	useEffect(() => {
		api.get('locations')
		.then(resp => setLocationsJSON(resp.data));
	}, []);

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
				<section id="locations">
					{
						locationsJSON.map((item) => {
							return <LocationListItem
								key = {item.id}
								img = {item.img}
								title = {item.title}
								text = {item.text}
								rating = {item.rating}
							/>
						})
					}
				</section>
			</Container>
		</>
	)
}
