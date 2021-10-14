import { useEffect, useState } from "react";
import { api } from "../../services/api";

import React from 'react';
import Card from '../Card/Index';
import * as S from './Styles'

export function ComoChegar(){
	const [ locationJSON, setLocationJSON ] = useState([]);

	useEffect(() => {
		api.get('locations')
		.then(resp => setLocationJSON(resp.data));
	}, []);

    return(

//exemplo: 				<img src={locationJSON.img} alt={''} />
//<p>					Você está em {locationJSON.title}</p>

<S.Container>
        <S.Section>
          
        <Card 
        cardImg={locationJSON.img}
        cardTitle={locationJSON.title} 
        cardDescription={locationJSON.textDescription}
        cardStars="Estrelas"
        cardButton="Saiba Mais"
        />        



<Card 
        cardImg={locationJSON.img}
        cardTitle={locationJSON.title} 
        cardDescription={locationJSON.textDescription}
        cardStars="Estrelas"
        cardButton="Saiba Mais"
        />        

<Card 
        cardImg={locationJSON.img}
        cardTitle={locationJSON.title} 
        cardDescription={locationJSON.textDescription}
        cardStars={locationJSON.ratingStars}
        cardButton="Saiba Mais"
        />        
                      
        </S.Section>

</S.Container>
    );
}

export default ComoChegar;
