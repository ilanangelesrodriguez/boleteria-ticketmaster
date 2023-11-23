import { useState } from 'react'
import './App.css'
import MyFirstComponent from "./MyFirstComponent.jsx";
import {Navbar} from "./components/Navbar/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  setTimeout(() => {
      setCount(count + 1);
  }, 2000);

  if (count < 2) {
      return <div>Cargando ...</div>
  }
  console.log('app rendered');

  return (
      <>
          {count < 2 ? <div>Cargando ...</div> : (
              <div>
                  <Navbar/>
                  <MyFirstComponent propOne={count} propTwo={2} propThree={{}}/>
              </div>
          )}
      </>
  )
}

export default App
