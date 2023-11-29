import { Box, Container, HStack } from '@style/jsx';
import { ReactNode } from 'react';

import GithubLink from './GithubLink';
import { Header } from './Header';
import LogoLink from './LogoLink';

interface Props {
  children: ReactNode;
}

const Navigation = ({ children }: Props) => {
  return (
    <Header>
      <Box borderY="1px">
        <Container>
          <HStack justify="space-between" py="3" gap="8">
            {children}
          </HStack>
        </Container>
      </Box>
    </Header>
  );
};

Navigation.Logo = LogoLink;
Navigation.GithubLink = GithubLink;

export default Navigation;
