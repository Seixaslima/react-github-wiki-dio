import styled from "styled-components";

export const ButtonBuscarContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.radioGroup {
    display: flex;
    flex-direction: column;
    gap: 5px;
    label {
      font-size: 18px;
    }
    input {
      margin-right: 5px;
    }
  }

  button {
    border: 1px solid #fafafa;
    border-radius: 20px;
    margin-top: 20px;

    height: 62px;
    width: 70%;

    font-size: 24px;
    cursor: pointer;

    transition: background-color 200ms;

    &:hover {
      background-color: #fafafa50;
    }
  }
`;
