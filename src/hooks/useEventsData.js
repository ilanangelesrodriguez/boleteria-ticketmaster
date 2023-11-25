// No es jsx porque no regresa un componente, regresa un hook
import {useEffect, useRef, useState} from "react";
import eventsJSON from "../data/events.json";

export const useEventsData = () => {
    //const data = useRef([]);
    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        setTimeout(() => {
            try {
                //data.current = eventsJSON;
                setData(eventsJSON);
                setIsLoading(false);
            } catch (e) {
                setError(e);
                setIsLoading(false);
            }

        }, 2000);

    }, []);

    return {
        events: data?._embedded?.events || [],
        isLoading,
        error
    }
}