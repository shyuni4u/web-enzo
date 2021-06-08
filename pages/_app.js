import App from 'next/app';
import Head from 'next/head';
import React from 'react';
// import NextNProgress from 'nextjs-progressbar';
import NextNProgress from '../components/atoms/NextProgress';
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
      <>
        <Head>
          <title>Enzo Homepage</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <NextNProgress />
        <Component {...other} />
      </>
    );
  }
}

export default wrapper.withRedux(RootApp);