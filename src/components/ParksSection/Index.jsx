import { Button } from "../Button/Index";
import { H2 } from "../H2/Index";
import { ImagesCarouselSquare } from "../ImagesCarouselSquare/Index";
import { Container } from "./Styles";

export function ParksSection ({location}) {
	return (
		<Container>
			<H2>Parques</H2>
			<p>
				{location.parks?.text}
			</p>
			<ImagesCarouselSquare src={location.parks?.img} />
			<Button outline>Ver restaurantes</Button>
		</Container>
	)
}
