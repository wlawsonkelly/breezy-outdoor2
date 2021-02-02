import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "./style.css"
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

function CalendarContainer() {

  const myeventList = []

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={myeventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default CalendarContainer;