import styled from "styled-components";

export const Container = styled.div`

width: 100%;
max-width: 1080px;
background: #fff;
margin: 0 auto;

padding: 2em 2em;
display: flex;

//Debug CSS com Border Color - Para saber a real posição do componente
//Retire o comentario do elemento abaixo para fazer o debbug
//border: 1.5px solid red;

& #faIcon{
margin-left: 15px;
}

& .accordion{
    width: 100%;
//border: 1.5px solid red;
-webkit-box-shadow: 5px 7px 5px -2px rgba(0,0,0,0.56); 
box-shadow: 5px 7px 5px -2px rgba(0,0,0,0.56);
}

& .accordion-button:focus {
    box-shadow: 0 0 0 0.25rem #f2382732;
}

& .accordion-button:not(.collapsed) {
    background-color: #f2382732;

}
`;