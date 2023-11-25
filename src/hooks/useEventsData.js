// No es jsx porque no regresa un componente, regresa un hook
import {useRef} from "react";
import eventsJSON from "../data/events.json";

export const useEventsData = () => {
    const data = useRef(eventsJSON);
    const { _embedded: {events} } = data.current;

    return {
        events,
    }
}