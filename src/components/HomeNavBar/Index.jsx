import { Button } from "../Button/Index";
import { Container } from "./Styles";

export function HomeNavBar() {
  return (
    <Container>
      <Button>Dicas úteis</Button>
      <Button outline>História</Button>
      <Button outline>Como chegar</Button>
      <Button outline>Cultura</Button>
      <Button outline>Gastronomia</Button>
      <Button outline>Parques</Button>
      <Button outline>Vida noturna</Button>
      <Button outline>Entretenimento</Button>
      <Button outline>Alugue o seu carro</Button>
    </Container>
  );
}
