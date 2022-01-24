import { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";

import * as S from "./styles/styles";
import * as I from "./components/bases/inputs";

import Header from "./components/header";

import api from "./services/api";

import CellphoneMask from "./utils/CellphoneMask";
import IPMask from "./utils/IPMask";
import manageLocalStorage from "./utils/manageLocalStorage";
import useWindowDimensions from "./utils/useWindowDimensions";

export default function App() {
  const [inputsValues, setInputsValues] = useState({
    name: "",
    profession: "",
    cellphone: "",
    IP: "",
  });

  const [localValues, setLocalValues] = manageLocalStorage("data", {
    name: "",
    profession: "",
    cellphone: "",
    IP: "",
  });

  const { deviceWidth } = useWindowDimensions();

  const handleResize = deviceWidth > 768 ? "medium" : "full";

  useEffect(() => {
    setInputsValues(localValues);
  }, []);

  async function foundIP() {
    const getIP = await api.get("/");

    setInputsValues({
      ...inputsValues,
      IP: `${IPMask(getIP.data)}`,
    });
  }

  function handleClean() {
    setLocalValues({
      name: "",
      profession: "",
      cellphone: "",
      IP: "",
    });
    setInputsValues({
      name: "",
      profession: "",
      cellphone: "",
      IP: "",
    });
  }

  return (
    <>
      <GlobalStyle />

      <S.MainBody>
        <Header />

        <S.FormDiv>
          <form>
            <S.InputBox width="100%">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                value={inputsValues.name}
                onChange={(e) => {
                  setInputsValues({ ...inputsValues, name: e.target.value });
                }}
              />
            </S.InputBox>

            <S.Row>
              <S.InputBox>
                <label htmlFor="profession">Profissão</label>
                <input
                  type="text"
                  name="profession"
                  value={inputsValues.profession}
                  onChange={(e) => {
                    setInputsValues({
                      ...inputsValues,
                      profession: e.target.value,
                    });
                  }}
                />
              </S.InputBox>

              <S.InputBox>
                <label htmlFor="cellphone">Celular</label>
                <input
                  type="text"
                  name="cellphone"
                  value={inputsValues.cellphone}
                  onChange={(e) => {
                    setInputsValues({
                      ...inputsValues,
                      cellphone: `${CellphoneMask(e.target.value)}`,
                    });
                  }}
                />
              </S.InputBox>
            </S.Row>

            <S.Row>
              <S.InputBox width="60%">
                <label htmlFor="IP">Meu IP</label>
                <input type="text" name="IP" value={inputsValues.IP} readOnly />
              </S.InputBox>

              <I.PrimaryButton
                size={handleResize}
                onClick={(e) => {
                  e.preventDefault();
                  foundIP();
                }}
              >
                ENCONTRAR IP
              </I.PrimaryButton>
            </S.Row>

            <S.SecundaryRow>
              <I.SecundaryButton
                size={handleResize}
                onClick={(e) => {
                  e.preventDefault();
                  setLocalValues(inputsValues);
                }}
              >
                SALVAR
              </I.SecundaryButton>

              <I.SecundaryButton
                size={handleResize}
                onClick={(e) => {
                  e.preventDefault();
                  handleClean();
                }}
              >
                LIMPAR
              </I.SecundaryButton>
            </S.SecundaryRow>
          </form>
        </S.FormDiv>
      </S.MainBody>
    </>
  );
}

// geralmente eu separaria o escopo do FormDiv em um componente separado, como o Header, mas numa pasta screens, mas como o projeto so tem uma página resolvi deixar assim
