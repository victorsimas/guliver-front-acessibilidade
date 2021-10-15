import { Button } from "../Button/Index";
import { H2 } from "../H2/Index";
import { ImagesCarouselSquare } from "../ImagesCarouselSquare/Index";
import { Container } from "./Styles";

export function GastronomySection ({location}) {
	return (
		<Container>
			<H2>Gastronomia</H2>
			<p>
				{location.gastronomy?.text}
			</p>
			<ImagesCarouselSquare src={location.gastronomy?.img} />
			<Button outline>Ver restaurantes</Button>
		</Container>
	)
}
