import styled from "styled-components";


export const Title = styled.div`

width: 100%;
max-width: 1080px;
background: #fff;
margin: 0 auto;
padding: 0.8em 0.8em;
display: flex;
justify-content: space-between;

& h1 {
padding: 0.5em 0.5em 0em;
color: var(--orange-light);
}

`;

export const Container = styled.div`

width: 100%;
max-width: 1080px;
background: #fff;
margin: 0 auto;
padding: 0em 0.8em;
display: flex;
justify-content: space-between;

//border: 5px solid yellow;

.card{
margin: auto;
margin-bottom: 5px;
    background: #454545;
}

& div {
    color: whitesmoke;
    font-size: 0.8rem;
    font-weight: 500;
    margin-left: 5px;
}

& h6{
font-size: 1rem;
    border-bottom: 1px solid black;
    padding-bottom: 5px;
    font-weight: 800;
}

& span{
    margin-left: 5px;
}

& i{
    font-size: 1.7rem;
}


& #faIcon{
margin-left: 15px;
}

& .accordion{
    width: 100%;
//border: 1.5px solid red;
-webkit-box-shadow: 5px 5px 5px -2px rgba(0,0,0,0.25); 
box-shadow: 5px 7px 5px -2px rgba(0,0,0,0.25);
}

& .accordion-button:focus {
    box-shadow: 0 0 0 0.10rem #f2382732;
}

& .accordion-button:not(.collapsed) {
    background-color: #f2382732;

}
`;