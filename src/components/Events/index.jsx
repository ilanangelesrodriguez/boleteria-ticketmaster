import {useState} from "react";
import {EventItem} from "./components/EventItem/index.jsx";
import eventsJSON from "../../data/events.json";

// data._embedded es un array de eventos de la API de eventos de Ticketmaster
export const Events = ({ searchText }) => {

    const [data, setData] = useState(eventsJSON);
    const { _embedded: {events} } = data;
    const handleEventClick = (id) => {
        console.log("evento clickeado: ", id);
    }

    const renderEvents = () => {
        let eventsFiltered = events;

        if (searchText.length > 0){
            eventsFiltered = eventsFiltered.filter((event) =>
                event.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }
        return eventsFiltered.map((event) => (
            <EventItem
                key={`event-item-${event.id}`}
                name={event.name}
                info={event.info}
                image={event.images[0].url}
                onEventClick={handleEventClick}
                id={event.id}
            />
        ));
    };

    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    );
};



