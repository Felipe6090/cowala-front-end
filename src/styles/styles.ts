import styled from "styled-components";

import { device } from "../components/bases/devices";

interface Props {
  width?: string;
  size?: string;
  margin?: string;
  pointer?: string;
  flex?: string;
}

export const MainBody = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #e5e5e5;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 50px;

  ${device.tablet} {
    padding-bottom: 50px;
  }
`;

export const FormDiv = styled.div`
  background-color: #ededed;

  width: 75%;

  padding: 20px 100px 20px 200px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  ${device.tablet} {
    padding: 20px 20px 20px 40px;
  }
`;

/*
eu sei que chega uma hora, por volta de 92px de largura de tela, que o layout
começa a quebrar um pouco, mais como eu uso o padrão de dispositivo pra cada tela
geralmente teria que alinhar com o resto da equipe se criacria mais uma variável pra
essa exceção, ou outra coisa, por isso resolvi deixa o layout meio quebrado mesmo
assim
*/

export const InputBox = styled.div`
  width: ${(props: Props) => props.width || "45%"};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  label {
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }

  input {
    width: 100%;
    height: 40px;

    border: none;
    border-radius: 5px;

    font-family: "Roboto", sans-serif;
    font-size: 1rem;

    padding: 0 15px;

    outline: none;
  }

  ${device.tablet} {
    width: 100%;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${device.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;

export const SecundaryRow = styled(Row)`
  justify-content: space-around;
`;
