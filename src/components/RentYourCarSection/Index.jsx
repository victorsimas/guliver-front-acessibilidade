import { H2 } from "../H2/Index";
import { Container } from "./Styles";
import CarImg from "../../assets/car.svg";
import { Button } from "../Button/Index";

export function RentYourCarSection({ location }) {
  return (
    <Container>
      <H2>Alugue o seu carro</H2>
      <div className="content">
        <div>
          <p>
            Conheça as opções mais viáveis para alugar um veículo em{" "}
            {location.title}
          </p>
          <Button outline>Veja as locadoras</Button>
        </div>
        <div className="image">
          <img src={CarImg} alt={`Aluguel de carros em ${location.title}`} />
        </div>
      </div>
    </Container>
  );
}
