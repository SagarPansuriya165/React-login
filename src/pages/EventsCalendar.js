import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

function EventsCalendar() {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        axios.get('https://example.com/events')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching events data:', error);
            });
    }, []);

    const handleEventClick = (info) => {
        setSelectedDate(info.date);
    }

    const handleCloseModal = () => {
        setSelectedDate(null);
    }

    const filteredEvents = events.filter(event => {
        return selectedDate && event.startTime === selectedDate.toISOString();
    });

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                events={events.map(event => ({
                    title: event.description,
                    start: event.startTime,
                    end: event.endTime
                }))}
                eventClick={handleEventClick}
            />
            {selectedDate && (
                <div className="modal">
                    <h3>{selectedDate.toLocaleDateString()}</h3>
                    <ul>
                        {filteredEvents.map(event => (
                            <li key={event.id}>{event.description}</li>
                        ))}
                    </ul>
                    <button onClick={handleCloseModal}>Close</button>
                </div>
            )}
        </>
    );
}

export default EventsCalendar;
