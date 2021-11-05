import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import HeadTags from '../components/Home/HeadTags';
import HomePageHeader from '../components/Home/HomePageHeader';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <HeadTags />
      <Layout title="Home" description={siteConfig.tagline}>
        <HomePageHeader />
      </Layout>
    </>
  );
}
