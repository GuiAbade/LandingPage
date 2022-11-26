import Frontend from "../templates/Frontend";
import * as S from './styles';
import ProductInformation from "../organismis/ProductInformation";
import ProductStats from "../organismis/ProductStats";

function Main() {
  return (
  <Frontend>
    <S.Container>
      <ProductInformation/>
      <ProductStats/>
    </S.Container>
  </Frontend>
  );
}

export default Main;
