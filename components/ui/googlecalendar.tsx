// components/GoogleCalendar.js

import React from 'react';

const GoogleCalendar = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=ndlovucavelle%40gmail.com&ctz=Europe%2FLondon"
      style={{ border: 0 }}
      width="800"
      height="600"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
};

export default GoogleCalendar;
