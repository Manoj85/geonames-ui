/**
 * Component to render layout
 * Provides content
 */
import React from 'react';

const LayoutStyle = {
  Container: {
    // overflow: 'hidden'
  },
  Content: {
    display: 'flex',
    flexDirection: 'column' as 'column'
  }
};

// @ts-ignore
const Layout = ({ children }) => (
  <div style={LayoutStyle.Container}>{children}</div>
);

// @ts-ignore
Layout.Content = ({ children }) => (
  <div style={LayoutStyle.Content}>{children}</div>
);

export default Layout;
