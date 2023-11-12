import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Zone() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Zone géographique</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="Zone 1" />
        <FormControlLabel value="2" control={<Radio />} label="Zone 2" />
        <FormControlLabel value="3" control={<Radio />} label="Zone 3" />
      </RadioGroup>
    </FormControl>
  );
}