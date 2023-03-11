import dayjs from 'dayjs';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export const DateTimePickerValue = () => {
  const [valueStart, setValueStart] = useState(dayjs('2000-01-01'));
  const [valueEnd, setValueEnd] = useState(dayjs('2040-01-31'));

  return (
    <div style={{ width: 300 }}>
      <p>Select license validity date</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
          <DateTimePicker
            label="from"
            value={valueStart}
            onChange={newValueStart => setValueStart(newValueStart)}
          />
          <DateTimePicker
            label="to"
            value={valueEnd}
            onChange={newValueEnd => setValueEnd(newValueEnd)}
          />
        </DemoContainer>
      </LocalizationProvider>
      <p>from /valueStart/</p>
      <p>to /valueEnd/</p>
    </div>
  );
};
