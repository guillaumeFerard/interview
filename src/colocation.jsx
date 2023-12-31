import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Colocation() {
  return (
    <div>
    <FormControl margin="normal">
      <FormLabel id="demo-row-radio-buttons-group-label">Colocation</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="colocation" control={<Radio />} />
      </RadioGroup>
    </FormControl>
    </div>
  );
}