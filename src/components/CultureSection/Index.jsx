import { Button } from "../Button/Index";
import { H2 } from "../H2/Index";
import { Container } from "./Styles";

export function CultureSection({location}) {
  return (
    <Container>
        <H2>Cultura de {location.title}</H2>
        <div>
          <div>
            <p>{location.culture?.text}</p>
            <Button outline>Ler mais</Button>
          </div>
          <div className="image">
            <img
              src={location.culture?.img}
              alt={`cultura de ${location.title}`}
            />
          </div>
        </div>
    </Container>
  );
}
