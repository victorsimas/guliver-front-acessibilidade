import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1080px;
  background: #f9efe3;
  margin: 0 auto;
  padding: 4em;
  & p {
    padding: 1em 0;
	max-width: 280px;
    color: var(--grey-text);
    line-height: 1.5;
    font-size: 1.2em;
  }
  & .content {
	  display: flex;
	  flex-wrap: wrap-reverse;
	  justify-content: flex-start;
	  align-items: center;
  }
  & .image {
	  width: 240px;
	  height: 240px;
	  background: #fff;
	  border-radius: 50%;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  box-shadow: 0 0 0 1em var(--orange-bg) inset;
  }
`;
