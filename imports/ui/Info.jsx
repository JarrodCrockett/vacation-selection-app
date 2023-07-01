import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Info = () => {
  return (
    <div>
      <p>Let me tell you about this thing.</p>
      <p>It is a handy thing.</p>
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
