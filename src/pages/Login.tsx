import S from './styles';
import LogoImg from '../assets/logo.svg';
import { FormGroup } from '../components/FormGroup';

export function Login() {
  return(
    <S.Container>
      <S.FormWrapper>
        <S.Logo src={LogoImg} alt="weme" />
        <form action="submit">
          <FormGroup name="email" label="Email" type="text" />
          
          <FormGroup name="password" label="Senha" type="password" />

          <button>Entrar</button>
        </form>
        <S.Link href="/register">Ainda não possui uma conta? Cadastre-se</S.Link>
      </S.FormWrapper>
    </S.Container>
  );
}