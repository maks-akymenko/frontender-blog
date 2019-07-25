import React from 'react';
import { Link } from 'gatsby';

import { StyledMenu } from './menu.styled';

const Menu = () => (
  <StyledMenu>
    <Link to="/" activeClassName="active">
      Blog
    </Link>
    <Link to="/about" activeClassName="active">
      About
    </Link>
    <Link to="/contact" activeClassName="active">
      Contact
    </Link>
  </StyledMenu>
);

export default Menu;
