import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  color: white;
  border-bottom: 8px solid white;
  @media (max-width: 765px) {
    display: flex;
    color: white;
    border-bottom: 8px solid white;
    width: 100%;
    flex-direction: column;
  }
`;

export const HeaderH1 = styled.h1`
  margin-left: 1%;
`;