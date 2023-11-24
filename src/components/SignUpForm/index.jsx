import {useState} from "react";

export const SignUpForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [adress, setAdress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [phone, setPhone] = useState("");

    const handleClearClick = () => {
        setName("");
        setAge("");
        setAdress("");
        setZipcode("");
        setPhone("");
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Formulario enviado", {
            name,
            age,
            adress,
            zipcode,
            phone
        });
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Name
                <input required value={name} type="text" onChange={(e)=>setName(e.target.value)} />
            </label>
            <br/>
            <label>
                Age
                <input required value={age} type="number" onChange={(e)=>setAge(e.target.value)} />
            </label>
            <br/>
            <label>
                Adress
                <input required value={adress} type="text" onChange={(e)=>setAdress(e.target.value)} />
            </label>
            <br/>
            <label>
                Zipcode
                <input required value={zipcode} type="text" onChange={(e)=>setZipcode(e.target.value)} />
            </label>
            <br/>
            <label>
                Phone
                <input required value={phone} type="number" onChange={(e)=>setPhone(e.target.value)} />
            </label>
            <div>
                <button>Enviar</button>
                <button onClick={handleClearClick}>Reset</button>
            </div>
        </form>
    )
}