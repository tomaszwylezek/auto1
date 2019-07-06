import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Nav: FC = (): JSX.Element => (
  <nav className="navbar navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Auto1 - JS Coding test
    </Link>
  </nav>
);
