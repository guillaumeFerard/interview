import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { AdapterDayFns } from '@mui/x-date-pickers/AdapterDayFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "dayjs/locale/fr";
//import {fr} from 'date-fns/locale'

export default function Month() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr" >
      <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
        <DatePicker label={'Mois examiné'} views={['month', 'year']} />
      </DemoContainer>
    </LocalizationProvider>
  );
}