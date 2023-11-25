import {useEffect, useState} from "react";
import styles from './Navbar.module.css';
import ticketmasterBanner from '../../assets/ticketmaster_banner.png';

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
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1em",
            padding: "1em",
            flexDirection: "row",
            flexWrap: "wrap",
        }}>
            <img src={ticketmasterBanner} alt={"Logo"} className={styles.navbarImg}/>
            <input type="text"
                   placeholder="Busca tu evento favorito"
                   onChange={handleInputChange}
                   onKeyDown={handleInputKeyDown}
                   value={search}
                   className={styles.navbarInput}
            />
        </div>
    );
}
