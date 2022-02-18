import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 80px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
  }
`;
