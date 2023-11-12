import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Sitfam() {
  return (
    <div>
    <FormControl margin="normal"> 
      <FormLabel id="demo-row-radio-buttons-group-label">Situation familiale</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Isolé" />
        <FormControlLabel value="male" control={<Radio />} label="Couple" />
        <FormControlLabel value="other" control={<Radio />} label="Jeune ménage" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}