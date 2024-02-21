import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/prime.css";
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header"

export default function DateInput({ className, placeholder, onClick }) {
  const [focus, onFocus] = useState(false);
  const ref = useRef();
  const [values, setValues] = useState(new Date());

  return (
    <DatePicker inputClass={`border border-gray-200 focus:outline-green-400 rounded-md px-2 py-4 w-full`}
        numberOfMonths={2}
        plugins={[
            <DatePickerHeader />
          ]}
        value={values}
       calendarPosition={`left-start`}
        fixMainPosition={true}
        fixRelativePosition={true}
        onChange={setValues}
       
      />
  );
}
