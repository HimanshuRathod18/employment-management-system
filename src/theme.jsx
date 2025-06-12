import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f4f5f7;
    color: #172B4D;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 20px;
  }

  .card {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(9, 30, 66, 0.1);
    padding: 16px;
    margin-bottom: 16px;
  }
`;
