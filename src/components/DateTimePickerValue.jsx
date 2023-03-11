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
      <h5>Select license validity date</h5>
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
      <p style={{fontSize: 16}}>from /valueStart/</p>
      <p style={{fontSize: 16}}>to /valueEnd/</p>
    </div>
  );
};
