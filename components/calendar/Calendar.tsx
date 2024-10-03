"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import styles from "./Calendar.module.css";

const Calendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));
  return (
    <div className={styles.container}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          {/* <DemoItem label="Uncontrolled calendar">
            <DateCalendar defaultValue={dayjs('2022-04-17')} />
          </DemoItem> */}
          <DemoItem label="">
            <DateCalendar
              value={value}
              onChange={(newValue: Dayjs | null) => setValue(newValue)}
              className={styles.selectedDate}
              sx={{
                "& .Mui-selected": {
                  backgroundColor: "#e214d5",
                  color: "#fff",
                },
                "& .Mui-selected.Mui-focusVisible": {
                  backgroundColor: "#e214d5",
                },
                "& .MuiPickersDay-root:focus.Mui-selected": {
                  backgroundColor: "#e214d5",
                },
                width: "576px",
                maxWidth: "576px",
                height: "290px",
              }}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
