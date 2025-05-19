import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #6b3fa0;
    --secondary-color: #f8f9fa;
    --text-color: #333333;
    --light-text: #757575;
    --accent-color: #ff6b6b;
    --background-color: #ffffff;
    --card-color: #ffffff;
    --border-color: #e0e0e0;
    --hover-color: #f0f0f0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: var(--text-color);
    background-color: var(--secondary-color);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`; 