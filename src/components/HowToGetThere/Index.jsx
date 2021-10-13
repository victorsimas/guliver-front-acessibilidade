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
          <input type="text" placeholder={`📍 ${location}`} />
          <button>
			  <img src={navigationImg} alt="Direções" />
			  Ver rotas
		  </button>
        </div>
      </div>
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src={`https://maps.google.com/maps?q=${location}&t=&z=7&ie=UTF8&iwloc=&output=embed`}
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      />
    </Container>
  );
}
