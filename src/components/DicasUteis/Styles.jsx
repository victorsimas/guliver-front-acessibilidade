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
padding: 0.8em 0.8em;
display: flex;
justify-content: space-between;

//border: 5px solid yellow;

.card{

    background: #5c5c5c;
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
    font-size: 1rem;
}
`;