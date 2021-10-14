import React from 'react';
import DicasUteis from '../DicasUteis/Index';
import { H1 } from '../H1';
import { H2 } from '../H2/Index';
import * as S from './Styles';
import { FaMapSigns } from "react-icons/fa";

//Componente de Container desenvolvido para testes bootstrap em tela
export function ContainerTempTest() {

    return (
        <S.Container>

            <div class="accordion">
                <div class="accordion-item">
                    <h2 
                    class="accordion-header" 
                    id="headingOne">
                    
                        <button 
                        class="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseOne" 
                        aria-expanded="true" 
                        aria-controls="collapseOne">
                            <H2>Dicas Uteis<FaMapSigns id="faIcon"/></H2>
                        </button>
                    </h2>
                    <div 
                    id="collapseOne" 
                    class="accordion-collapse collapse show" 
                    aria-labelledby="headingOne" 
                    >
                        <div class="accordion-body">
                            <DicasUteis />
                        </div>
                    </div>
                </div>

            </div>

        </S.Container>
    );
}

export default ContainerTempTest;