import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };
export const GlobalStyle = styled.createGlobalStyle`
  // reset Css
  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  section,
  header,
  footer,
  aside,
  article,
  nav,
  main,
  ul,
  li,
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  input,
  button,
  form,
  label,
  img,
  textarea,
  select,
  option,
  table,
  tbody,
  thead,
  tr,
  td,
  th,
  dl,
  dt,
  dd,
  strong,
  em,
  i,
  b,
  textarea,
  select,
  option,
  textarea,
  select,
  option,
  textarea,
  select,
  option {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
    background-color: unset;
    border: none;
  }
  /* */
  html {
    font-size: 62.5%;
  }
  body {
    height: 100vh;
    width: 100vw;
    display: flex;
    text-decoration: none;
  }
  :root {
    --primary: #0f3f37;
    --secondary: #19685b;
    --accent: #23917f;
    --darkgreen: #051613;
    --lightgray: #e6e6e6;
    --error: #ea8685;
    --errorAccent: #f78fb3;
  }
  #root {
    height: inherit;
    width: inherit;
    position: relative;
  }
`;
