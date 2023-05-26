//import React from 'react';
import { Container, Box, Grid, Paper, MenuItem, MenuList, Stack } from '@mui/material';
import { Sidebar } from '../components';
import * as React from 'react';



const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2} sx={{ width: '100vw', height: '100vh' }}>
      <Sidebar />
      <Content />
    </Stack>
  );
};

const Content = () => {
  return (
    <div>
      <h1>主要內容</h1>
      <p>這裡是主要內容的區域。</p>
    </div>
  );
};

export default HomePage;
