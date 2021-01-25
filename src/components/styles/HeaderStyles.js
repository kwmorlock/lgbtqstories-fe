import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const LinkDiv = styled.div`
  margin: 20px auto;
  font-size: 2rem;
`;

export const ButtonDiv = styled.div`
  color: white;
  margin: 20px auto;
  font-size: 2rem;
  background: none;
`;

export const HeaderButton = styled.button`
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  font-size: 2rem;
`;

export const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
