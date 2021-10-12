import { Button } from "../../components/Button/Index";
import { H1Title } from "../../components/H1Title";
import { LocationListItem } from "../../components/LocationListItem/Index";
import { Container } from "./Styles";
import { api } from "../../servies/api";
import { useEffect, useState } from "react";

export function Home() {
	const [ locationsJSON, setLocationsJSON ] = useState([]);
	const [ locationsFilter, setLocationsFilter ] = useState(null);

	useEffect(() => {
		api.get('locations')
		.then(resp => setLocationsJSON(resp.data));
	}, []);

	function handleSetFilter(category) {
		setLocationsFilter(category);
	}

	return (
		<>
			<Container>
				<main>
					<H1Title title="Navegue por locais turísticos"/>
					<div className="nav-bar">
						<Button
						onClick={()=> handleSetFilter('')}
						>Todos</Button>
						<Button outline
						onClick={()=> handleSetFilter('beach')}
						>Praias</Button>
						<Button outline
						onClick={()=> handleSetFilter('historical')}
						>Turismo Histórico</Button>
						<Button outline
						onClick={()=> handleSetFilter('nature')}
						>Natureza</Button>
						<Button outline
						onClick={()=> handleSetFilter('international')}
						>Internacional</Button>
						<Button outline
						onClick={()=> handleSetFilter('')}
						>Em alta</Button>
					</div>
				</main>
				<section id="locations">
					{
						locationsFilter ?

						locationsJSON
						.filter(loc => loc.category === locationsFilter)
						.map((item) => {
							return <LocationListItem
								key = {item.id}
								img = {item.img}
								title = {item.title}
								text = {item.text}
								rating = {item.rating}
							/>
						})

						:

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
