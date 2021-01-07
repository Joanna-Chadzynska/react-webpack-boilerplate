import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    /* Remove default padding */
    ul,
    ol,
    body {
        padding: 0;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul,
    ol,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    html,
    body {
        height: 100%;
    }

    body {
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
        transition: all 0.50s linear;
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    /* Remove list styles on ul, ol elements with a class attribute */
    ul,
    ol {
        list-style: none;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    /* Make images easier to work with */
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
        max-width: 100%;
        display: block;
    }

    /* Natural flow and rhythm in articles by default */
    article > * + * {
        margin-top: 1em;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;

    }
`;

export default GlobalStyles;
