import { CustomTheme } from "../../types/styled";

const lightTheme: CustomTheme = {
  name: "light",
  colors: {
    textStronger: "#000000",
    textStrong: "#171717",
    text: "#333333",
    textMedium: "#666666",
    textSoft: "#999999",

    primaryStrong: "#ffffff",
    primary: "#f6f6f6",
    primarySoft: "#eeeeee",

    contrastStrong: "#7A0019", // UMN Maroon
    contrast: "#900021", // Slightly lighter maroon
    contrastSoft: "#a23b50",

    secondaryStrong: "#FFCC33", // UMN Gold
    secondary: "#FFD84D",
    secondarySoft: "#FFE680",

    accentStrong: "#666666", // Darker gray
    accent: "#999999",
    accentSoft: "#cccccc",

    detailStrong: "#646464",
    detail: "#999999",
    detailSoft: "#dddddd",

    success: "#2ecc71",
    info: "#3498db",
    warning: "#f39c12",
    error: "#e74c3c",

    maroonStrong: "#7A0019", // UMN Maroon
    maroon: "#900021", // Slightly lighter maroon
    maroonSoft: "#a23b50",

    goldStrong: "#FFCC33", // UMN Gold
    gold: "#FFD84D",
    goldSoft: "#FFE680",
  },
};

export default lightTheme;
