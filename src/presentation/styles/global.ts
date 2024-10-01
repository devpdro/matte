import { css } from "@emotion/react";

export default css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    height: 100%;
    width: 100%;
    margin: 0rem;
  }

  *,
  body,
  input,
  button {
    border: 0;
    background: none;
    outline: none;
    font-family: "Roboto", BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.48;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    background: none;
    cursor: pointer;
    border: 0;
    outline: 0;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  a,
  button {
    -webkit-tap-highlight-color: transparent;
  }

  ul,
  li,
  p {
    list-style: none;
    text-align: left;
    padding: 0;
    margin-bottom: 0;
  }
`;
