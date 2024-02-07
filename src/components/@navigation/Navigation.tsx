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
        <Container px={4}>
          <HStack justify="space-between" py="2" gap="8">
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
