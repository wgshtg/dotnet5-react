import React from 'react';
import { Container } from 'reactstrap';

import { NavMenu } from './NavMenu';

export const Layout: React.FC = ({ children }) => (
  <div>
      <NavMenu />
      <Container>
        {children}
      </Container>
    </div>
)