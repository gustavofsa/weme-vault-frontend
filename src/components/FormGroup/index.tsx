import S from './styles';

interface FormGroupProps {
  name: string,
  label: string,
  type: string,
}

export function FormGroup({name, label, type}: FormGroupProps) {

  return(
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input id={name} type={type} />
    </S.Container>
  );
}