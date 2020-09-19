import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin: 30px;
  color: #fff;
`;

export const Form = styled.form`
  flex: 1;
  margin: 0 auto;
  width: 450px;
  height: 500px;
  padding: 0 40px;

  background: #f8f9fe;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 15px 15px 5px rgba(0, 0, 0, 0.2);

  h2 {
    text-align: center;
    color: #94a3b3;
    font-size: 20px;
  }

  input {
    width: 100%;
    height: 44px;
    padding: 16px;
    font-size: 16px;
    color: #a0a4a8;
    border: none;
    border-radius: 4px;
    box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.1);
  }

  p {
    text-align: center;
    color: #94a3b3;

    a {
      color: #000;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7dd56f;
  height: 42px;
  width: 160px;
  border-radius: 4px;
  border: none;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 3px 5px 2px rgba(0, 0, 0, 0.2);

  svg {
    margin-right: 20px;
  }
`;
