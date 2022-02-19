import styled from 'styled-components';

export const Container = styled.section`
  padding: 100px 300px;

  .iconDiv {
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    padding-left: 20px;

    margin-bottom: 50px;

    p {
      margin-left: 5px;
    }
  }

  .border-content {
    padding-left: 80px;
    display: flex;
    align-items: center;

    .borders {
      p span {
        margin: 10px;
        padding: 3px 20px;
        border-radius: 3px;
        box-shadow: 0 5px 20px hsla(200, 15%, 8%, 0.5);
      }
    }
  }
`;

export const Content = styled.article`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div h3 {
    font-size: 30px;
    letter-spacing: 1px;
    margin-bottom: 30px;
  }

  div p {
    font-size: 18px;
  }

  .image-content {
    width: 500x;
    height: 300px;
    img {
      height: 100%;
    }
  }
`;

export const CountryInfo = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div p {
    margin-bottom: 10px;
  }

  span {
    font-weight: bold;
  }

  .right-col {
    padding-top: 30px;
    padding-left: 50px;
  }
`;
