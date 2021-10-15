import { useEffect, useState } from "react";
import { CultureSection } from "../../components/CultureSection/Index";
import DicasUteis from "../../components/DicasUteis/Index";
import { EntertainmentSection } from "../../components/EntertainmentSection/Index";
import { GastronomySection } from "../../components/GastronomySection/Index";
import { H1 } from "../../components/H1/index";
import { HistorySection } from "../../components/HistorySection/Index";
import { HomeNavBar } from "../../components/HomeNavBar/Index";
import { HowToGetThere } from "../../components/HowToGetThere/Index";
import { NightLifeSection } from "../../components/NightLifeSection/Index";
import { ParksSection } from "../../components/ParksSection/Index";
import { api } from "../../services/api";
import { Banner, Container } from "./Styles";

export function Home() {
  const [locationJSON, setLocationJSON] = useState([]);

  useEffect(() => {
    api.get("locations").then((resp) => setLocationJSON(resp.data));
  }, []);

  return (
    <>
      <Banner className="banner">
        <img src={locationJSON.img} alt={""} />
      </Banner>

      <Container>
        <H1>Você está em {locationJSON.title}</H1>
        <HomeNavBar />
        <DicasUteis />
        <HistorySection location={locationJSON} />
      </Container>

      <HowToGetThere location={locationJSON} />

      <Container>
        <CultureSection location={locationJSON} />
        <GastronomySection location={locationJSON} />
        <NightLifeSection location={locationJSON} />
		<ParksSection location={locationJSON} />
		<EntertainmentSection location={locationJSON} />
      </Container>
    </>
  );
}
