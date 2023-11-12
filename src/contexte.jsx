import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

function Context() {
    const [context, setContext] = useState('');

    const handleChange = (event) => {
      setContext(event.target.value);
    };

    return (
    <div style={{ display: 'flex', alignItems: 'flex-end', columnGap: 8 }}>
    <TextField
      label="Contexte"
      sx={{ width: 300 }}
      select
      value={context}
      onChange={handleChange}
      margin="normal"
    >
        <MenuItem key={context} value="SAG">
          SAG - Simulation Agent
        </MenuItem>
      </TextField>
      </div>
    )
}

export default Context