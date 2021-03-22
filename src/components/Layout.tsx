import React, {
  FunctionComponent
} from 'react';
import Navbar from './NavBar';

type LayoutProps = {};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;