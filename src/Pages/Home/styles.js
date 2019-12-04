import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 500px;
  background: #f6f6f6;
  border: solid 1px #ccc;
  box-sizing: border-box;
  box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
  justify-content: flex-start;

  form {
    display: flex;
    flex-direction: column;
    margin: 20px 30px;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: rgba(0, 0, 0, 0.6);
    margin: 0 0 10px;

    &::placeholder {
      color: #999;
    }
  }

  span {
    color: #3b9eff;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  table {
    border-radius: 4px;
    align-self: stretch;

    margin: 20px;
    background-color: #ccc;

    tr {
      background-color: #eee;

      th {
        height: 10px;
        justify-content: center;
        align-items: center;
      }

      button {
        border: none;
        background-color: #eee;
      }
    }
  }
`;

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-bottom: solid 0.1px #ddd;
  margin: 0 20px;

  a {
    font-weight: bold;
    font-size: 15;
  }
`;

export const ButtonAdd = styled.button`
  margin: 10px 0 0;
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
