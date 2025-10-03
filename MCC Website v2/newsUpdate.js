/*  
    calendarEvent Options Example
  $("#evoCalendar").evoCalendar({
    calendarEvents: [
      {
        id: 'bHay68s', // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2020", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        name: "Vacation Leave",
        badge: "02/13 - 02/15", // Event badge (optional)
        date: ["February/13/2020", "February/15/2020"], // Date range
        description: "Vacation leave for 3 days.", // Event description (optional)
        type: "event",
        color: "#63d867" // Event custom color (optional)
      }
    ]
  });

    addCalendarEvent Method Example
   $("#evoCalendar").evoCalendar('addCalendarEvent', [
    {
      id: '09nk7Ts',
      name: "My Birthday",
      date: "February/15/2020",
      type: "birthday",
      everyYear: true
    }
  ]);

    selectDate Event Example
    $("#evoCalendar").on('selectDate', function() {
    // code here
  });

  for more info: https://github.com/edlynvillegas/evo-calendar
*/

$(document).ready(function() {
    $('#calendar').evoCalendar({
        theme: "Royal Navy"
    })
})
