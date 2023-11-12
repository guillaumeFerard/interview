import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Charge() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      margin="normal"
    >
      <TextField id="standard-basic" placeholder="0" label="Nombre enfants ou personnes à charge" variant="standard" />
    </Box>
  );
}