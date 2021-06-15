import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Auth0Provider } from '@auth0/auth0-react';
import '../../locales/i18n';

import GlobalStyle from '../../styles/global-styles';
import theme from '../../styles/theme';
import { ThemeProvider } from '../../styles/themed-components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledToastContainer = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress'
})`
  /* .toast-container */
  height: 32px;

  /* .toast is passed to toastClassName */
  .toast {
    border-radius: 20px;
    min-height: auto;
  }

  button[aria-label='close'] {
    /* display: none; */
  }

  /* .body is passed to bodyClassName */
  .body {
    text-indent: 10px;
  }

  /* .progress is passed to progressClassName */
  .progress {
  }
`;

const StyledWrapper = styled.div`
  margin: 0px;
`;

export const Wrapper: React.FC = ({ children }) => {
  const [uri, setUri] = useState<string>('');

  useEffect(() => {
    if (window) {
      setUri(window.location.origin);
    }
  }, []);

  return (
    <Auth0Provider domain="enzo-dev.us.auth0.com" clientId="xEBQkzTpRT6HoH8aevbczvOpxr9vR1XL" redirectUri={uri}>
      <StyledToastContainer />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledWrapper>{children}</StyledWrapper>
      </ThemeProvider>
    </Auth0Provider>
  );
};

export default Wrapper;
