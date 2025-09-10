import "styled-components";

export interface CustomTheme {
  name: string;
  colors: {
    textStronger: string;
    textStrong: string;
    text: string;
    textMedium: string;
    textSoft: string;

    primaryStrong: string;
    primary: string;
    primarySoft: string;

    contrastStrong: string;
    contrast: string;
    contrastSoft: string;

    secondaryStrong: string;
    secondary: string;
    secondarySoft: string;

    accentStrong: string;
    accent: string;
    accentSoft: string;

    detailStrong: string;
    detail: string;
    detailSoft: string;

    success: string;
    info: string;
    warning: string;
    error: string;

    maroonStrong: string; // UMN Maroon
    maroon: string; // Slightly lighter maroon
    maroonSoft: string;

    goldStrong: string; // UMN Gold
    gold: string;
    goldSoft: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
