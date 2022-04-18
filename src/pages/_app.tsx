import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../../prismicio';
import { PaginationProvider } from '../contexts/paginationContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <PaginationProvider>
          <Component {...pageProps} />
        </PaginationProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
