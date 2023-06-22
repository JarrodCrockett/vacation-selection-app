import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Info = () => {
  return (
    <div>
      <p>Oftentimes when checking local RFPs it can become not only a tedious process,
        but also one that takes away from internal development time. So we thought,
        wouldn't it be wonderful if we implemented a machine learning model to check RFPs
        for us instead??? Enter RFP Checker.</p>
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
