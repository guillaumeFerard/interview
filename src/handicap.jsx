import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Handicap() {
  return (
    <div>
    <FormControl margin="normal">
      <FormLabel id="demo-row-radio-buttons-group-label">Une personne du foyer bénéficie de l'AAH / AEEH</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="No" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}