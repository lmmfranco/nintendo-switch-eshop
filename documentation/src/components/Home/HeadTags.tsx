import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { FC, memo } from 'react';

const HeadTags: FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="Expires" content="1y" />
      <meta httpEquiv="Pragma" content="1y" />
      <meta httpEquiv="Cache-Control" content="1y" />
      <meta httpEquiv="Page-Enter" content="RevealTrans(Duration=2.0,Transition=2)" />
      <meta httpEquiv="Page-Exit" content="RevealTrans(Duration=3.0,Transition=12)" />
      <link rel="canonical" href="https://sapphirejs.dev" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <link rel="apple-touch-icon" sizes="180x180" href={`${siteConfig.baseUrl}img/favicons/apple-touch-icon.png`} />
      <link rel="icon" type="image/png" sizes="192x192" href={`${siteConfig.baseUrl}img/favicons/android-chrome-192x192.png`} />
      <link rel="icon" type="image/png" sizes="194x194" href={`${siteConfig.baseUrl}img/favicons/favicon-194x194`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${siteConfig.baseUrl}img/favicons/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${siteConfig.baseUrl}img/favicons/favicon-16x16.png`} />
      <link rel="manifest" href={`${siteConfig.baseUrl}/manifest.webmanifest`} />
      <link rel="mask-icon" href={`${siteConfig.baseUrl}/img/favicons/safari-pinned-tab.svg`} color="#F89034" />
      <link rel="shortcut icon" href={`${siteConfig.baseUrl}img/favicons/favicon.ico`} />
      <link rel="apple-touch-startup-image" href="/img/favicons/apple-startup.png" />
    </Head>
  );
};

export default memo(HeadTags);
