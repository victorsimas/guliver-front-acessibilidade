import styled from "styled-components";

export const Container = styled.h2`
  color: var(--orange-dark);
  &:after {
    content: "";
    width: 1.5em;
    height: 3px;
    background: var(--orange-dark);
    display: block;
    margin: 0.3em 0;
  }
`;
