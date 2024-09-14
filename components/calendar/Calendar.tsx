'use client';

import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import styles from './Calendar.module.css';


const Calendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        {/* <DemoItem label="Uncontrolled calendar">
          <DateCalendar defaultValue={dayjs('2022-04-17')} />
        </DemoItem> */}
        <DemoItem label="">
          <DateCalendar 
            value={value} 
            onChange={(newValue: Dayjs | null) => setValue(newValue)} 
            className={styles.selectedDate}
            sx={{
                "& .MuiPickersDay-root": {
                  "&.Mui-selected": {
                    backgroundColor: '#e214d5',
                  },
                },
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default Calendar;