import Satoshi from "@assets/fonts/satoshi";
import { createGlobalStyle } from "styled-components";

export const globalAnimationSpeed = "400ms";
export const customEaseInOut = [0.75, 0, 0.25, 1];
export const customEaseOut = [0.25, 0.75, 0.25, 1];
export const recommendedPagePadding = "4rem min(10vw, 9rem)";

const GlobalStyle = createGlobalStyle`
// * FONTS
${Satoshi}

// * CSS RESET
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    view-transition-name: none;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  // * SET UP DEFAULT FONT
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, small, button {
    font-family: 'Satoshi';
  }

  * {
    transition: color var(--global-animation-speed) var(--custom-ease-in-out), background-color var(--global-animation-speed) var(--custom-ease-in-out), border-color var(--global-animation-speed) var(--custom-ease-in-out);
  }

  // * GLOBAL VARIABLES
  :root {
    --global-animation-speed: ${globalAnimationSpeed};
    --custom-ease-in-out: cubic-bezier(${customEaseInOut.join(", ")});
    --custom-ease-out: cubic-bezier(${customEaseOut.join(", ")});
    --recommended-page-padding: ${recommendedPagePadding};
  }
`;

export default GlobalStyle;
