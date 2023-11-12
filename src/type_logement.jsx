import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

function TypeLogement() {
    const [type, setType] = useState('');

    const handleChange = (event) => {
      setType(event.target.value);
    };

    return (
    <div style={{ display: 'flex', alignItems: 'flex-end', columnGap: 8 }}>
    <FormControl margin='dense'>
    <TextField
      label="Type d'occupation"
      sx={{ width: 300 }}
      select
      value={type}
      onChange={handleChange}
      margin="normal"
    >
        <MenuItem key={type} value="NC">
        NON_MEUBLE_NC - Logement non meublé - Non conventionné (01)
        </MenuItem>
      </TextField>
      </FormControl>
      </div>
    )
}

export default TypeLogement