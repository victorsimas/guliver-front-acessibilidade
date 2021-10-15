import { Button } from "../Button/Index";
import { H2 } from "../H2/Index";
import { Container } from "./Styles";

export function HistorySection({location}) {
  return (
    <Container>
      <H2>História de {location.title}</H2>
      <p>{location.history?.text}</p>
      <Button outline>Ler mais</Button>
    </Container>
  );
}
