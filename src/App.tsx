import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import environment from './relay/environment';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { AppQuery } from './__generated__/AppQuery.graphql';

const App: React.FC = () => {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        hello
      }
    `,
    {}
  );

  return <div>{data.hello}</div>;
};

const Root: React.FC = () => (
  <RelayEnvironmentProvider environment={environment}>
    <App />
  </RelayEnvironmentProvider>
);

export default Root;
