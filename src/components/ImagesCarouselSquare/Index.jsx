import { Container } from "./Styles";

export function ImagesCarouselSquare({src}) {
  return (<Container>
	  {src && src.map((url) => {
		  return <img src={url} alt="" />;
	  })}
  </Container>);
}
