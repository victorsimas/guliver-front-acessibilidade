import { Container } from "./Styles";

export function ImagesCarouselSquare({src}) {
  return (<Container>
	  {src && src.map((url, index) => {
		  return <img src={url} key={index} alt="" />;
	  })}
  </Container>);
}
