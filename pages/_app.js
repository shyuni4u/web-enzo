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
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="심리 테스트, 직업 추천, 월드 오브 워크래프트, 로스트 아크, MBTI"></meta>
          <meta name="description" content="개발자 블로그" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="개발자 블로그" />
          <meta property="og:description" content="개발자 블로그" />
          <meta property="og:url" content="http://enzo.kr/" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "ca-pub-7797435335029081",
                  enable_page_level_ads: true
                });
              `
            }}
          />
        </Head>
        <NextNProgress />
        <Component {...other} />
      </>
    );
  }
}

export default wrapper.withRedux(RootApp);