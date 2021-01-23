import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 12%;
  color: white;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
`;

export const Title = styled.p`
  font-size: 3rem;
  margin-top: -30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  text-align: center;
  margin: 1%;
`;


export const Button = styled.button`
  width: 80px;
  height: 40px;
  background: hotpink;
  background: -webkit-linear-gradient(
    right,
    violet,
    lightblue,
    cyan,
    lightblue,
    violet
  ); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(
    left,
    violet,
    lightblue,
    cyan,
    lightblue,
    violet
  ); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(
    left,
    violet,
    lightblue,
    cyan,
    lightblue,
    violet
  ); /* For Firefox 3.6 to 15 */
  background: linear-gradient(
    to left,
    violet,
    lightblue,
    cyan,
    lightblue,
    violet
  ); /* Standard syntax (must be last) */
`;

export const Disclaimer = styled.p`
  font-size: 2rem;
`;