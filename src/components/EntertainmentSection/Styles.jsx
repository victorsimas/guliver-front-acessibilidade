import styled from "styled-components";

export const Container = styled.section`
  padding: 2em 2.5em;
  & p {
    padding: 1em 0;
    color: var(--grey-text);
    line-height: 1.5;
    font-size: 1.2em;
  }
  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    & > div {
      flex: 2;
      padding: 0.5em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    & .image {
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 720px) {
    & > div {
      flex-direction: column-reverse;
    }
  }
`;
