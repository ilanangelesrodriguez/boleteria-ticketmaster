import { useState } from 'react'
import './App.css'
import MyFirstComponent from "./MyFirstComponent.jsx";
import {Navbar} from "./components/Navbar/index.jsx";

const arrayOfNumbers = [1, 2, 3, 4, 5];


function App() {
  const [count, setCount] = useState(0);

  const items = arrayOfNumbers.map((number) => {
        return <li key={`array-number-item-${number}`}>{number}</li>
  });

  console.log(items);

  setTimeout(() => {
      setCount(count + 1);
  }, 2000);

  console.log('app rendered');

  return (
      <>

          {count < 2 ? <div>Cargando ...</div> : (
              <div>
                  <Navbar/>
                  <MyFirstComponent propOne={count} propTwo={2} propThree={{}}/>
                  <ul>
                      {items}
                  </ul>
              </div>
          )}
      </>
  )
}

export default App
