import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { ReactNode } from 'react';

import { Copyright } from './Copyright';
import { NavigationBar } from 'components/NavigationBar';

type PageLayoutProps = {
  children: ReactNode;
  classes?: string;
  title: string;
};

export const PageLayout = ({ children, classes, title }: PageLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link href="/favicon.ico" rel="icon" />
        <meta charSet="utf-8" />
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {/* <meta content={theme.palette.primary.main} name="theme-color" /> */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      </Head>
      <Container disableGutters maxWidth={false}>
        <NavigationBar />
        <main>{children}</main>
        <Box component="footer" mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};
