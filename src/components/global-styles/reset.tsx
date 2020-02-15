import * as React from 'react';
import { Global, css } from '@emotion/core';

export const Reset = () => (
  <Global
    styles={css`
      html,
      body,
      p,
      div,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ul,
      ol,
      dl,
      img,
      pre,
      form,
      fieldset {
        margin: 0;
        padding: 0;
      }
      img,
      fieldset {
        border: 0;
      }

      * {
        box-sizing: inherit;
      }

      html {
        box-sizing: border-box;
      }

      body,
      html {
        height: 100%;
        width: 100%;
      }

      #__next {
        height: 100%;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-decoration-skip-ink: auto;
      }
    `}
  />
);
