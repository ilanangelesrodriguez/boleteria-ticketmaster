import {useEffect, useState} from "react";

export const Navbar = ({ onSearch } ) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        console.log("Use effect");
    }, [search, onSearch]);

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const handleInputKeyDown = (event) => {
        if (event.key === "Enter") {
            console.log("Buscando: ", search);
            onSearch(search);
        }
    }

    //console.log(search)

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1em",
            flexDirection: "column",
        }}>
            <p>Mi boletera</p>
            <input type="text"
                   placeholder="Busca tu evento favorito"
                   onChange={handleInputChange}
                   onKeyDown={handleInputKeyDown}
                   value={search}
            />
        </div>
    );
}
