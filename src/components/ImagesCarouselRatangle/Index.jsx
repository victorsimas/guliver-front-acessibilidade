import { Container } from "./Styles";

export function ImagesCarouselRatangle({ src }) {
  return (
    <Container>
      {src &&
        src.map((url, index) => {
          return <img key={index} src={url} alt="" />;
        })}
    </Container>
  );
}
