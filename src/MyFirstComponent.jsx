import {useState} from "react";

const MyFirstComponent = ( {propOne, propTwo, propThree} ) => {
    const [greeting, setGreeting] = useState("Hello World!");
    const [count, setCount] = useState(0);

    // Esto se actualiza cada 8 segundos
    setTimeout(() => {
        setCount(count + 1);
    }, 200000);

    console.log('my first component rendered');

    return (
        <div>
            {greeting}
            <h1>My First Component</h1>
            <p>My first component is awesome!</p>
            <p>Count is {count}</p>
        </div>
    );
};

export default MyFirstComponent;
