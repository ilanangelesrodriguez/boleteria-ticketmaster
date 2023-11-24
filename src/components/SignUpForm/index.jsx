import {useState} from "react";
import {useForm} from "react-hook-form";

export const SignUpForm = () => {
    const {register, handleSubmit, reset, formState:{errors} } = useForm();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [adress, setAdress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [phone, setPhone] = useState("");

    const handleClearClick = () => {
        reset();
    }

    const handleFormSubmit = (data) => {
        console.log(data);

    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label>
                Name
                <input type="text" {...register('name', {required: true})} />
            </label>
            <br/>
            <label>
                Age
                <input type="number" {...register('age', {required: true})} />
            </label>
            <br/>
            <label>
                Adress
                <input type="text" {...register('adress', {required: true})} />
            </label>
            <br/>
            <label>
                Zipcode
                <input type="text" {...register('zipcode', {required: true})} />
            </label>
            <br/>
            <label>
                Phone
                <input type="number" {...register('phone', {required: true})} />
            </label>
            <div>
                <button>Enviar</button>
                <button onClick={handleClearClick}>Reset</button>
            </div>
        </form>
    )
}