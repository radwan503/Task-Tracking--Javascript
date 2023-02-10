//calendar
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      
        height: 285,
        initialView: 'dayGridMonth',
        timeZone: 'UTC',
        themeSystem: 'bootstrap',
        headerToolbar: {
          left: '',
          center: '',
          right: ''
        },
        weekNumbers: false,
        dayMaxEvents: true, // allow "more" link when too many events
        views: {
         timeGrid: {
           eventLimit: 1,
           dayMaxEventRows: 1
         }
       },
        events: [
          {
            id: 'a',
            title: 'my event gdghjhgkhj dfhgjkghd',
            start: '2022-04-17',
            
          },
          {
           id: 'a',
           title: 'my event',
           start: '2022-04-06',
          },
          {
            id: 'a',
            title: 'my event',
            start: '2022-04-05',
          },
          {
            id: 'a',
            title: 'my event',
            start: '2022-04-05',
            
          },
          {
            id: 'a',
            title: 'my event',
            start: '2022-04-05',
            
          },
          {
            id: 'a',
            title: 'my event',
            start: '2022-04-05',
            
          },
          {
            id: 'a',
            title: 'my event',
            start: '2022-04-05',
            
          },
          {
            id: 'a',
            title: 'my event',
            start: '2022-04-05',
            
          },
          {
            id: 'a',
            title: 'my event',
            start: '2022-04-05',
            
          },
          {
            id: 'a',
            title: 'my event',
            start: '2022-04-05',
            
          },
          {
            id: 'a',
            title: 'my event',
            start: '2022-04-09',
            
          },
          {
            id: 'a',
            title: 'my event',
            start: '2022-04-05',
            
          },
        ],


    });
    calendar.render();
 });



