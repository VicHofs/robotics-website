import { css } from "styled-components";
import SatoshiBlackWoff2 from "./woff2/Satoshi-Black.woff2";
import SatoshiBlackWoff from "./woff/Satoshi-Black.woff";
import SatoshiBlackItalicWoff2 from "./woff2/Satoshi-BlackItalic.woff2";
import SatoshiBlackItalicWoff from "./woff/Satoshi-BlackItalic.woff";
import SatoshiBoldWoff2 from "./woff2/Satoshi-Bold.woff2";
import SatoshiBoldWoff from "./woff/Satoshi-Bold.woff";
import SatoshiBoldItalicWoff2 from "./woff2/Satoshi-BoldItalic.woff2";
import SatoshiBoldItalicWoff from "./woff/Satoshi-BoldItalic.woff";
import SatoshiMediumWoff2 from "./woff2/Satoshi-Medium.woff2";
import SatoshiMediumWoff from "./woff/Satoshi-Medium.woff";
import SatoshiMediumItalicWoff2 from "./woff2/Satoshi-MediumItalic.woff2";
import SatoshiMediumItalicWoff from "./woff/Satoshi-MediumItalic.woff";
import SatoshiRegularWoff2 from "./woff2/Satoshi-Regular.woff2";
import SatoshiRegularWoff from "./woff/Satoshi-Regular.woff";
import SatoshiItalicWoff2 from "./woff2/Satoshi-Italic.woff2";
import SatoshiItalicWoff from "./woff/Satoshi-Italic.woff";
import SatoshiLightWoff2 from "./woff2/Satoshi-Light.woff2";
import SatoshiLightWoff from "./woff/Satoshi-Light.woff";
import SatoshiLightItalicWoff2 from "./woff2/Satoshi-LightItalic.woff2";
import SatoshiLightItalicWoff from "./woff/Satoshi-LightItalic.woff";

const Satoshi = css`
  @font-face {
    font-family: "Satoshi";
    src:
      url(${SatoshiBlackWoff2}) format("woff2"),
      url(${SatoshiBlackWoff}) format("woff");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Satoshi";
    src:
      url(${SatoshiBlackItalicWoff2}) format("woff2"),
      url(${SatoshiBlackItalicWoff}) format("woff");
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: "Satoshi";
    src:
      url(${SatoshiBoldWoff2}) format("woff2"),
      url(${SatoshiBoldWoff}) format("woff");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Satoshi";
    src:
      url(${SatoshiBoldItalicWoff2}) format("woff2"),
      url(${SatoshiBoldItalicWoff}) format("woff");
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: "Satoshi";
    src:
      url(${SatoshiMediumWoff2}) format("woff2"),
      url(${SatoshiMediumWoff}) format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Satoshi";
    src:
      url(${SatoshiMediumItalicWoff2}) format("woff2"),
      url(${SatoshiMediumItalicWoff}) format("woff");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "Satoshi";
    src:
      url(${SatoshiRegularWoff2}) format("woff2"),
      url(${SatoshiRegularWoff}) format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Satoshi";
    src:
      url(${SatoshiItalicWoff2}) format("woff2"),
      url(${SatoshiItalicWoff}) format("woff");
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "Satoshi";
    src:
      url(${SatoshiLightWoff2}) format("woff2"),
      url(${SatoshiLightWoff}) format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Satoshi";
    src:
      url(${SatoshiLightItalicWoff2}) format("woff2"),
      url(${SatoshiLightItalicWoff}) format("woff");
    font-weight: 300;
    font-style: italic;
  }
`;

export default Satoshi;
