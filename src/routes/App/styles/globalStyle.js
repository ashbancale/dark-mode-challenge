import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: red;
    color: ${({ theme }) => theme.contentTextColor}
  }
  .input {
    background: ${({ theme }) => theme.input}
    &:placeholder {
      color: white;
    }
    &:hover {
      border-color: #d4d4d4; 
    }
    &:focus {
      border-color: #d4d4d4; 
    }
  }
  .light-mode-btn {
    color: #00BDE4
  }
  .dark-mode-btn {
    border: 0;
    background: transparent;
    font-size: 30px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
  .buttons > .button {
    height: 30px;
    width: 100px;
  }
`;

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
    overflow: auto;
    height: 100vh !important;
    width: 100%;
    background-color: ${(props) => props.theme.pageBackground};
    transition: all .5s ease
`;

export const Wrapper = styled.div`
  padding: 10%;
  max-width: 1000px;
  box-sizing: content-box;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  font-size: 32px;
  font-weight: bold
  transition: all 0.5s ease;
`;

export const lightTheme = {
  pageBackground: "#eff0eb",
  titleColor: "#000",
  contentTextColor: "#000",
  input: "red",
};

export const darkTheme = {
  pageBackground: "#282c36",
  titleColor: "#BB86FC",
  contentTextColor: "#d4d4d4",
  input: "#d4d4d4",
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
