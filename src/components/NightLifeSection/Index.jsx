import { Button } from "../Button/Index";
import { H2 } from "../H2/Index";
import { ImagesCarouselRatangle } from "../ImagesCarouselRatangle/Index"
import { Container } from "./Styles";

export function NightLifeSection ({location}) {
	return (
		<Container>
			<H2>Vida Noturna</H2>
			<p>
				{location.nightLife?.text}
			</p>
			<ImagesCarouselRatangle src={location.nightLife?.img} />
			<Button outline>Conheça bares e atrações</Button>
		</Container>
	)
}
