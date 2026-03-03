document.addEventListener('DOMContentLoaded', function() {
    const calendarElement = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarElement, {
        initialView: 'dayGridMonth',
        locale:'es',
        headerToolbar: {
            left: 'prev, next today',
            center: 'title',
            right: 'dayGridMonth, timeGridWeek, timeGridDay'
        },
        buttonText: {
            today: 'Hoy',
            month: 'Mensual',
            week: 'Semanal',
            day: 'Diario'
        },
        heigth: '100%',
        events: [
            {
                title: 'Carlos Ruiz',
                start: '2026-03-24T14:00:00',
                end: '2026-03-24T15:00:00',
                backgroundColor: '#4F46E5', 
                borderColor: '#4F46E5'
            },
            {
                title: 'Elena Torres',
                start: '2026-03-26T16:00:00',
                end: '2026-03-26T17:00:00',
                backgroundColor: '#4F46E5',
                borderColor: '#4F46E5'
            }
        ]
    });
    calendar.render();
})