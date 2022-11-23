import ButtonContact from "../atoms/ButtonContact";
import Frontend from "../templates/Frontend"
import * as S from './styles'

function Main() {
  return (
  <Frontend>
    <S.Container>
      <div>
        <h1>Design diven development of your web product</h1>
        <h6>
          We are a full service digital agency that biulds immersive user expirience.
        </h6>

        <ButtonContact/>

      </div>

      <div>
        <div>Teste</div>
      </div>
    </S.Container>
  </Frontend>
  );
}

export default Main;
