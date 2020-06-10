import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import defaultTheme from './defaultTheme';

const GlobalStyle = createGlobalStyle`

  ${reset}

  html {
    font-family: ${({ theme }) => theme.global.fontFamily};
    ${({ theme }) => theme.texts.p1}
  }

  body {
    background-color: ${({ theme }) => theme.global.bgColor};
    color: ${({ theme }) => theme.global.fontColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  ${({ theme }) => headingsGenerator(theme.headings)}

  p{
    ${({ theme }) => theme.texts.p1};
  }

  .p1b{
    ${({ theme }) => theme.texts.p1b};
  }

  .p2{
    ${({ theme }) => theme.texts.p2};
  }

  .p2b{
    ${({ theme }) => theme.texts.p2b};
  }

  .p3b{
    ${({ theme }) => theme.texts.p3b};
  }

  strong {
    font-family: ${({ theme }) => theme.global.fontFamily};
    ${({ theme }) => theme.texts.p1b}
  }

  button {
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
  
  a {
    font-family: ${({ theme }) => theme.global.fontFamily};
    font-weight: ${({ theme }) => theme.global.fontWeightBold};
    text-decoration: none;
    font-style: normal;
    transition: color 300ms ease-in-out;
    white-space: nowrap;
    color: ${({ theme }) => theme.color.primary500};

    &.primary {
      color: ${({ theme }) => theme.color.primary500};
      &:visited {
        color: ${({ theme }) => theme.color.primary500};
      }
    }

    &.disabled {
      color: ${({ theme }) => theme.color.charcoal400};
      &:visited {
        color: ${({ theme }) => theme.color.charcoal400};
      }
    }

    &.secondary {
      color: ${({ theme }) => theme.color.charcoal600};
      &:visited {
        color: ${({ theme }) => theme.color.charcoal600};
      }
    }

    &.large {
      font-size: 14px;
    }

    &:hover,
    .active {
      color: ${({ theme }) => theme.color.primary300};
    }
  }
`;

const headingsGenerator = config =>
  config.map(
    ({ size, fontFamily, fontWeight }, i) =>
      `h${i + 1}{font-size: ${size}; font-family: ${fontFamily}; font-weight: ${fontWeight};}`
  );

GlobalStyle.defaultProps = {
  theme: defaultTheme
};

export default GlobalStyle;
