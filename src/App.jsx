import { useState } from 'react'
import './App.css'
import MyFirstComponent from "./MyFirstComponent.jsx";
import {Navbar} from "./components/Navbar/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  console.log('app rendered');

  return (
    <>
      <Navbar/>
      <MyFirstComponent propOne={count} propTwo={2} propThree={{}}/>

    </>
  )
}

export default App
