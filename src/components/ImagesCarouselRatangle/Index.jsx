import { Container } from "./Styles";

export function ImagesCarouselRatangle({ src }) {
  return (
    <Container>
      {src &&
        src.map((url) => {
          return <img src={url} alt="" />;
        })}
    </Container>
  );
}
