import App from 'next/app';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
// import NextNProgress from 'nextjs-progressbar';
import NextNProgress from '../components/atoms/NextProgress';
import { Auth0Provider } from '@auth0/auth0-react';
import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import reducerModule from '../modules';

const configureStore = () => {
  const store = createStore(reducerModule);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development,'
});

export class RootApp extends App {
  render() {
    const { Component, other } = this.props;
    return (
      <Auth0Provider
        domain={'dev-moreh.us.auth0.com'}
        clientId={'cVH05HM8y3FtpnDTIxzirf1vtRsiAlYc'}
        // redirectUri={typeof window !== 'undefined' && window.location.origin}
      >
        <Head>
          <title>Enzo Homepage</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <NextNProgress />
        <Component {...other} />
      </Auth0Provider>
    );
  }
}

export default wrapper.withRedux(RootApp);