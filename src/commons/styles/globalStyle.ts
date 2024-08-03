import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0px;
  }

  :root {
    --color-grey-100: #eeeeed;
    --color-grey-300: #bdbdbd;
    --color-grey-500: #808080;
    --color-grey-700: rgb(58 58 58);
    --color-grey-900: rgb(41 41 41);

    --color-primary-300: #fff7e0;
    --color-primary-600: rgb(251 212 91);
  }

  @font-face {
    font-family: "NanumGothicCoding-Bold";
    src: url("/fonts/NanumGothicCoding-Bold.ttf");
  }

  @font-face {
    font-family: "NanumGothicCoding-Regular";
    src: url("/fonts/NanumGothicCoding-Regular.ttf");
  }

  @font-face {
    font-family: "Comfortaa";
    src: url("/fonts/Comfortaa-Regular.ttf");
  }

  @font-face {
    font-family: "Quicksand";
    src: url("/fonts/Quicksand-Regular.ttf");
  }
`;
