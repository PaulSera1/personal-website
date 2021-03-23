import React, {
  FunctionComponent
} from 'react';
import {
  NavBar
} from './NavBar';

type LayoutProps = {};

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);
