"use client";

import React, { useState, useEffect } from "react";
import { Icons } from "./icons";
import { Button } from "./ui/button";
// Import icons from `react-icons` or similar if needed


interface AppointmentData {
    startTime: Date,
    endTime: Date,
    title: string,
    isNew: boolean,
    isActive: boolean
}

const APPOINTMENTS = [
    {
      startTime: new Date('2024-01-18T15:20:27.767Z'),
      endTime: new Date('2024-01-18T16:20:27.767Z'),
      title: 'Amanda Raufl',
      isNew: true,
      isActive: true
    },
    {
      startTime: new Date('2024-01-18T16:20:27.767Z'),
      endTime: new Date('2024-01-18T17:20:27.767Z'),
      title: 'Tony Ferg',
      isNew: false,
      isActive: false
    },
    {
      startTime: new Date('2024-01-18T17:20:27.767Z'),
      endTime: new Date('2024-01-18T18:20:27.767Z'),
      title: 'Luka Lamaj',
      isNew: true,
      isActive: false
    },
    {
      startTime: new Date('2024-01-18T18:20:27.767Z'),
      endTime: new Date('2024-01-18T19:20:27.767Z'),
      title: 'Jose Fernedez',
      isNew: false,
      isActive: false
    },
    {
      startTime: new Date('2024-01-18T19:20:27.767Z'),
      endTime: new Date('2024-01-18T20:20:27.767Z'),
      title: 'Lily Smith',
      isNew: true,
      isActive: false
    },
    {
      startTime: new Date('2024-01-18T20:20:27.767Z'),
      endTime: new Date('2024-01-18T21:20:27.767Z'),
      title: 'Tyra Riach',
      isNew: false,
      isActive: false
    },
    {
      startTime: new Date('2024-01-18T21:20:27.767Z'),
      endTime: new Date('2024-01-18T22:20:27.767Z'),
      title: 'Kaiden Jordan',
      isNew: true,
      isActive: false
    },
    {
      startTime: new Date('2024-01-18T22:20:27.767Z'),
      endTime: new Date('2024-01-18T23:20:27.767Z'),
      title: 'Alexis Birch',
      isNew: false,
      isActive: false
    },
    {
      startTime: new Date('2024-01-18T23:20:27.767Z'),
      endTime: new Date('2024-01-19T00:20:27.767Z'),
      title: 'Aaron Thompkins',
      isNew: true,
      isActive: false
    },
    {
      startTime: new Date('2024-01-19T00:20:27.767Z'),
      endTime: new Date('2024-01-19T01:20:27.767Z'),
      title: 'Nathan Boctor',
      isNew: false,
      isActive: false
    }
  ];

  function calculateCurrentTimePosition(currentTime: any) {
  const scheduleStartHour = APPOINTMENTS[0].startTime.getHours();
  const currentHour = parseInt(currentTime.split(':')[0], 10);
  const currentMinute = parseInt(currentTime.split(':')[1], 10);

  // Assuming each hour block in the schedule has a height of 100px
  const hourHeight = 100;
  const minutesHeight = (currentMinute / 60) * hourHeight;

  // Calculate the top position based on the hour and minutes
  const topPosition = ((currentHour - scheduleStartHour) * hourHeight) + minutesHeight;

  return `${topPosition}px`;
}

const CalendarComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  // ... other states

  useEffect(() => {
    // equivalent to x-init in Alpine.js
    // initDate();
    // getNoOfDays();
  }, []);

  // ... other methods

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-6">
          <Button variant="ghost">
            <Icons.left />
          </Button>
          <h1 className="text-center text-2xl font-bold py-4">January 17</h1>
          <Button variant="ghost">
            <Icons.right />
          </Button>
        </div>
      </div>

      <div className="px-4 mt-4">
  <div className="relative">
    {/* Vertical dashed line offset to the left */}
    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-transparent" style={{ borderLeft: '2px dashed #CBD5E0' }}></div>

    {/* Time slots */}
    <div className="pl-16"> {/* Increase left padding to move away from the dashed line */}
      {APPOINTMENTS.map((appointment, index) => (
        <div className="flex items-center mb-4" key={index}>
          {/* Time label */}
          <div className="w-10 text-right text-sm font-semibold text-gray-600 mr-3">
            {appointment.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          {/* Appointment box */}
          <div className="flex-grow bg-white p-4 rounded-lg shadow-sm flex items-center justify-between border border-gray-300 hover:bg-gray-50">
            {/* Appointment details */}
            <div>
              <p className="text-lg font-semibold">{appointment.title}</p>
              <p className="text-sm text-gray-500">
                {appointment.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} &gt; {" "}
                {appointment.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            {/* Status tags */}
            <div className="flex items-center space-x-2">
              {appointment.isNew && (
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">New</span>
              )}
              {appointment.isActive && (
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">Ongoing</span>
              )}
            </div>
          </div>
        </div>
      ))}
       <div className="absolute left-4 right-0" style={{ top: calculateCurrentTimePosition('10:45') }}>
        {/* Current time indicator line */}
        <div className="bg-blue-600 h-0.5 w-full"></div>
        {/* Current time indicator circle */}
        <div className="absolute -left-2.5" style={{ top: '50%', transform: 'translateY(-50%)', marginTop: '-0.125rem' }}>
          <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
        </div>

</div>
  </div>
</div>
</div>

    
    </>
  );
};

export default CalendarComponent;
