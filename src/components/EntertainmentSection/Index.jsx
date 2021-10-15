import { Button } from "../Button/Index";
import { H2 } from "../H2/Index";
import { Container } from "./Styles";

export function EntertainmentSection({location}) {
  return (
    <Container>
        <H2>Entretenimento</H2>
        <div>
          <div>
            <p>{location.entertainment?.text}</p>
            <Button outline>Ler mais</Button>
          </div>
          <div className="image">
            <img
              src={location.entertainment?.img}
              alt={`cultura de ${location.title}`}
            />
          </div>
        </div>
    </Container>
  );
}
