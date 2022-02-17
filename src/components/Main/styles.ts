import styled from 'styled-components';

export const Container = styled.main``;

export const ContainerInput = styled.div`
  margin: 6rem 7rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  input {
    width: 350px;
    height: 50px;
    box-shadow: 0px 0px 15px -5px;

    text-indent: 15px;
  }

  select {
    width: 200px;
    height: 35px;
  }
`;

export const CountriesCards = styled.div`
  display: inline-block;
  margin: 0 5rem;
  margin-bottom: 2rem;
`;

export const CardContent = styled.div`
  width: 300px;
  overflow: hidden;
  transition: 0.3s;
  animation: ease-in;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px -5px;
  }

  .image-container {
    overflow: hidden;
    height: 200px;
  }

  .card-content {
    margin: 1rem;
    margin-top: 0.5rem;

    h4 {
      margin: 10px 0px;
    }

    ul li {
      list-style-type: none;
    }
  }
`;
