import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 50px 130px;

  div select {
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    background: ${(props) => props.theme.colors.background};
    width: 200px;
    height: 35px;
    color: ${(props) => props.theme.colors.text};
  }
`;
export const Form = styled.form`
  input {
    border: none;
    border-radius: 5px;
    width: 400px;
    height: 50px;
    text-indent: 15px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;
