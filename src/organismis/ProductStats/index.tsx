import HeroHeaderImage from '../../assets/hero-header-img.svg';
import CardActivity from "../../molecules/CardActivity";
import * as S from './styles';

const ProductStats = () => {
  return (
    <S.Container>
      <CardActivity/>        
      <img src={HeroHeaderImage} alt="Uma mulher fazendo uma pesquisa"/>
  </S.Container>
  );
}

export default ProductStats;