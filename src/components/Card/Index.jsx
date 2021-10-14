//style="width: 18rem;"

import * as S from './Styles'
import cardImg from "../../assets/Cards/CidadeSP.jpg"
import React, {Component} from 'react';

export function Card(props){    
    return (
        <S.Container className="card">
            <img src={props.cardImg} alt="Menu" class="card-img-top"/>
            <div className ="card-body">
            <h5 className ="card-title" name="teste">{props.cardTitle} </h5>
            <p className ="card-text">{props.cardDescription}</p>
            <p className ="card-text">{props.cardStars}</p>
           
            <a href="#" className ="btn btn-primary">{props.cardButton}</a>
            </div>
        </S.Container>
    );
}

export default Card;