import { H2 } from "../H2/Index";
import { Container } from "./Styles";
import navigationImg from '../../assets/navigation.svg'

export function HowToGetThere({ location }) {
  return (
    <Container>
      <div>
        <H2>Como chegar</H2>
        <p>
          Insira a sua localização para ver as
          <b> rotas disponíveis</b>
        </p>
        <div className="search-input">
          <input type="text" placeholder={`📍 ${location.title}`} />
          <button>
			  <img src={navigationImg} alt="Direções" />
			  Ver rotas
		  </button>
        </div>
      </div>
      <iframe
	  	title={`Google Maps ${location.title}`}
        width="100%"
        height="100%"
        src={`https://maps.google.com/maps?q=${location.title}&t=&z=7&ie=UTF8&iwloc=&output=embed`}
      />
    </Container>
  );
}
