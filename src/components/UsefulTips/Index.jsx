import { useEffect, useState } from "react";
import { api } from "../../services/api";

import React from 'react';
import * as S from './Styles';
import H2 from '../H2/Index';
import { FaMapSigns, FaLanguage, FaSuitcaseRolling, FaStreetView, FaRegMoneyBillAlt, FaBolt, FaPassport, FaTemperatureHigh, FaRegClock } from "react-icons/fa";
import { MdFreeCancellation } from "react-icons/md";

export function UsefulTips() {

    const [locationJSON, setLocationJSON] = useState([]);

    useEffect(() => {
        api.get('locations')
            .then(resp => setLocationJSON(resp.data));
    }, []);

    return (
        <>
            <S.Container>

            <div class="accordion">
                <div class="accordion-item">
                    <h2 class="accordion-header"
                        id="headingOne">
                        <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne">
                            <H2 >Dicas Uteis<FaMapSigns id="faIcon" /></H2>
                            
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne">
                        <div class="accordion-body">



                <div className="card w-75">

                    <div className="card-body">
                        <h6 className="card-title">Quando ir</h6>
                        <p className="card-text">
                            <i><MdFreeCancellation /> </i>
                            <span />
                            {locationJSON.whenTravel}
                        </p>
                    </div>

                    <div className="card-body">
                        <h6 className="card-title">Temperatura Média Anual</h6>
                        <p className="card-text">
                            <i><FaTemperatureHigh /> </i>
                            <span />
                            {locationJSON.averageTemperature}
                        </p>
                    </div>

                    <div className="card-body">
                        <h6 className="card-title">Fuso Horario</h6>
                        <p className="card-text">
                            <i><FaRegClock /></i>
                            <span />
                            {locationJSON.timeZone}
                        </p>
                    </div>
                </div>

                <div className="card w-75">

                    <div className="card-body">
                        <h6 className="card-title">Idioma</h6>
                        <p className="card-text">
                            <i><FaLanguage /></i>
                            <span />
                            pt-br | Portugues Brasileiro
                        </p>
                    </div>

                    <div className="card-body">
                        <h6 className="card-title">Voltagem e pinagem</h6>
                        <p className="card-text">
                            <i><FaBolt /></i>
                            <span />
                            120/220 ws | 3 Pinos Abnt
                        </p>
                    </div>

                    <div className="card-body">
                        <h6 className="card-title">Moeda Local e Cambio</h6>
                        <p className="card-text">
                            <i><FaRegMoneyBillAlt /></i>
                            <span />
                            R$ Real
                        </p>
                    </div>
                </div>


                <div className="card w-75">

                    <div className="card-body">
                        <h6 className="card-title">Documentos Necessários</h6>
                        <p className="card-text">
                            <i><FaPassport /></i>
                            <span />
                            Ri | Passaporte Internacional
                        </p>
                    </div>

                    <div className="card-body">
                        <h6 className="card-title">Bagagem e Roupas</h6>
                        <p className="card-text">
                            <i><FaSuitcaseRolling /></i>
                            <span />
                            Bagagem
                        </p>
                    </div>

                    <div className="card-body">
                        <h6 className="card-title">Transportes na Cidade</h6>
                        <p className="card-text">
                            <i><FaStreetView /></i>
                            <span />
                            Uber /99 Services | Localiza RentCar
                        </p>
                    </div>
                </div>

                </div>
                    </div>
                </div>
            </div>


            </S.Container>
        </>
    );
}

export default UsefulTips;
