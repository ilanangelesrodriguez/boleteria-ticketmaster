// No es jsx porque no regresa un componente, regresa un hook
import {useState} from "react";
import eventsJSON from "../data/events.json";

export const useEventsData = () => {
    const [data, setData] = useState(eventsJSON);
    const { _embedded: {events} } = data;

    return {
        events,
    }
}