import styled from 'styled-components';

export const Container = styled.main`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`;

export const CountryCard = styled.div`
  min-height: 400px;
  background: ${(props) => props.theme.colors.primarys};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  width: 300px;
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px -5px;
  }
`;
export const CountryImage = styled.div`
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CountryInfo = styled.div`
  padding: 20px 17px;
  margin-bottom: 5px;

  h4 {
    padding: 8px 0;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.text};
  }

  p {
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.text};
  }
`;
