import { RelayEnvironmentProvider } from 'react-relay';
import environment from '../src/RelayEnvironment'

function MyApp({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

export default MyApp;