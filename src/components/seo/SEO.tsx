import * as React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

const SEOConfig = {
  title: 'Tambium Color Lab',
  description: 'Tambium Color Lab: Tooling to build accessible color systems.',
  twitter: {
    cardType: 'summary',
  },
};

export const SEO: React.FC = () => {
  return (
    <React.Fragment>
      <DefaultSeo {...SEOConfig} />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/meta/favicon-16x16.png"
        />
        <link rel="manifest" href="/meta/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/meta/safari-pinned-tab.svg"
          color="#1F304D"
        />
        <meta name="msapplication-TileColor" content="#1F304D" />
        <meta name="theme-color" content="#FFF" />
      </Head>
    </React.Fragment>
  );
};
