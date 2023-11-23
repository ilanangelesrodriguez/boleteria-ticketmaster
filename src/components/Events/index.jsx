import {useState} from "react";
import {EventItem} from "./components/EventItem/index.jsx";
import eventsJSON from "../../data/events.json";

// data._embedded es un array de eventos de la API de eventos de Ticketmaster
export const Events = () => {

    const [data, setData] = useState(eventsJSON);
    const { _embedded: {events} } = data;
    const handleEventClick = (id) => {
        console.log("evento clickeado: ", id);
    }

    return (
        <div>
            Eventos
            {
                events.map((event) => (
                    <EventItem
                        key={`event-item-${event.id}`}
                        name={event.name}
                        info={event.info}
                        image={event.images[0].url}
                        onEventClick={handleEventClick}
                        id={event.id}
                    />
                ))
            }
        </div>
    );
};



