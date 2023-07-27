import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.darkBackground};
`;

const Logo = styled.img`
  margin-bottom: 2rem;
  width: 200px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Link = styled.a`
  font-size: 14px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.text};

  &:hover {
    text-decoration: underline;
    color: ${({theme}) => theme.colors.secondary};
  }
`;

export default {
  Container, 
  FormWrapper,
  Logo,
  Link
};