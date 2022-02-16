import styled from 'styled-components';

export const Container = styled.main``;

export const ContentInput = styled.div`
  margin: 6rem 7rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  input {
    width: 350px;
    height: 50px;
    box-shadow: 3px 3px 3px black;

    text-indent: 15px;
  }

  select {
    width: 200px;
    height: 35px;
  }
`;
