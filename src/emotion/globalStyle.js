import { injectGlobal } from 'react-emotion';

const globalStyle = injectGlobal`
@import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,700');

  body {
    padding: 0;
    margin: 0;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    background-color: #00a99e;
    text-align: center;
    color: white;
  }
`;

export default globalStyle;
