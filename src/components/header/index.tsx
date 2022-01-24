import * as S from "./styles";

import Logo from "../../images/Logo.png";
import HeaderText from "../../images/Cowala_Software.png";

/*obs: como eu não sei qual a fonte foi usada para o texto do header 
usei o png disponivel no figma, mas usaria texto padrão se soubesse a 
fonte
*/
export default function Header() {
  return (
    <S.Header>
      <S.Logo src={Logo} />
      <S.HeaderText src={HeaderText} />
    </S.Header>
  );
}
