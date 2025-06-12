// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F7FAFC;
    color: #172B4D;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 20px;
  }
  .card {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(9, 30, 66, 0.08);
    padding: 16px;
    margin-bottom: 16px;
  }
  
  .table-container {
    background: #f7faff;
    border-radius: 8px;
    box-shadow: 0 1px 6px rgba(9, 30, 66, 0.12);
    padding: 24px;
    margin-bottom: 24px;
  }

  a {
    color: #0C66E4;
  }
`;

export default GlobalStyle;
