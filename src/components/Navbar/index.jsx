import {useState} from "react";

export const Navbar = () => {
    const [search, setSearch] = useState("");

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    //console.log(search)

    return (
        <div>
            <p>Mi boletera</p>
            <input type="text"
                   placeholder="Busca tu evento favorito"
                   onChange={handleInputChange}
                   value={search}
            />
        </div>
    );
}
