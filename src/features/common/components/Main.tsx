/**
 * Component that sets the general structure of the app
 */
import React from 'react';
import Layout from './Layout';

// @ts-ignore
const Main = (topbar, content) => () => (
  <Layout>
    <Layout.Content>
      {topbar}
      {content}
    </Layout.Content>
  </Layout>
);

export default Main;
