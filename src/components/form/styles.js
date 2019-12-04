import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  height: 400px;
  max-height: 400px;
  background: #f6f6f6;
  box-shadow: 0px 0px 3px 3px #ddd;

  form {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  span {
    color: #3b9eff;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    margin: 5pc 0 0;
    height: 44px;
    background: #f94d6a;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, "#f94D6A")};
    }
  }

  a {
    color: #000;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
