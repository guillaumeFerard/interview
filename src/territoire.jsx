import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Territory() {
  return (
    <FormControl margin="normal">
      <FormLabel id="demo-row-radio-buttons-group-label">Territoire</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="DOM" />
        <FormControlLabel value="male" control={<Radio />} label="Mayotte" />
        <FormControlLabel value="other" control={<Radio />} label="Métropole" />
      </RadioGroup>
    </FormControl>
  );
}