import { createGlobalStyle } from 'styled-components';
// import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, 
    Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

function MyApp({Component, pageProps}) {
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
