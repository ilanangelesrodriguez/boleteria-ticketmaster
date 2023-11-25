import {useState} from "react";
import {EventItem} from "./components/EventItem/index.jsx";
import {useEventsData} from "../../hooks/useEventsData.js";

// data._embedded es un array de eventos de la API de eventos de Ticketmaster
export const Events = ({ searchText }) => {

    const {events, isLoading, error} = useEventsData();
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

    if (error) {
        return <p>Hubo un error</p>;
    }

    if (isLoading) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    );
};



