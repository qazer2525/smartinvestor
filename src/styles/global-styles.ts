import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    overflow-x: hidden;
    max-width: 100vw;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /* padding-top: ${StyleConstants.NAV_BAR_HEIGHT}; */
    background-color: ${p => p.theme.background};
    font-size: 16px;
    
    @media screen and (max-width: 768px) {
      /* padding-top: ${StyleConstants.NAV_BAR_HEIGHT_MOBILE || '3rem'}; */
      font-size: 14px;
    }
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,
  label {
    line-height: 1.5em;
    max-width: 100%;
    word-wrap: break-word;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
    max-width: 100%;
    
    @media screen and (max-width: 768px) {
      min-height: 44px;
    }
  }

  img, video {
    max-width: 100%;
    height: auto;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    
    @media screen and (max-width: 768px) {
      width: 1.75rem;
      height: 1.75rem;
    }
  }

  /* Prevent horizontal scrolling and ensure proper content sizing */
  #root {
    max-width: 100vw;
    overflow-x: hidden;
    margin: 0 auto;
    padding: 0 1rem;

    @media screen and (max-width: 768px) {
      padding: 0 0.5rem;
    }
  }

  /* Make all content responsive */
  div {
    max-width: 100%;
    width: auto;
  }

  /* Ensure tables don't break layout */
  table {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    display: block;
  }

  /* Add responsive flexbox utilities */
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
  }

  .flex-item {
    flex: 1 1 auto;
    min-width: 0; /* Prevent flex items from overflowing */
  }
`;
