import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const styles = {
  wrapper: {
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '40px',
  },
};
const Info = () => {
  return (
    <div style={styles.wrapper}>
      <p>Let me tell you about this thing.</p>
      <p>It is a handy thing.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {/* todo: add something nice for handling code snippets */}
      <Stack spacing={2}>
        <Button variant="contained" color="primary">
          This button does nothing
        </Button>
        <Button variant="outlined" color="secondary">
          This button also does nothing
        </Button>
      </Stack>
    </div>
  );
};
export default Info;
