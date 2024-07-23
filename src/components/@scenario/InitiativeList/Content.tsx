import { Icon } from 'icons';

import { Drawer, IconButton } from 'components/@common';

import SortableInitiatives from './SortableInitiatives';

const Content = () => {
  return (
    <Drawer.Content gridTemplateRows="auto 1fr 0">
      <Drawer.Header
        flexDirection="row"
        alignItems="center"
        display="flex"
        justifyContent="space-between"
      >
        <Drawer.Title fontSize="2xl" fontWeight="normal">
          Initiative overview
        </Drawer.Title>
        <Drawer.CloseTrigger asChild>
          <IconButton variant="ghost">
            <Icon name="close" />
          </IconButton>
        </Drawer.CloseTrigger>
      </Drawer.Header>
      <Drawer.Body>
        <SortableInitiatives />
      </Drawer.Body>
    </Drawer.Content>
  );
};

export default Content;
