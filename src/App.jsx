import { useState } from 'react'
import './App.css'
import MyFirstComponent from "./MyFirstComponent.jsx";
import {Navbar} from "./components/Navbar/index.jsx";
import {Events} from "./components/Events/index.jsx";

const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfPeople = [
    {
        id: 1,
        name: 'Ilan',
        age: 23
    },
    {
        id: 2,
        name: 'Marita',
        age: 25
    },
    {
        id: 3,
        name: 'Jesús',
        age: 27
    }
];

function App() {
  //const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("");

  /*const items = arrayOfNumbers.map((number) => {
        return <li key={`array-number-item-${number}`}>{number}</li>
  });

  const peopleItems = arrayOfPeople.map((person) => {
        return <li key={`array-person-item-${person.id}`}>{person.id}: {person.name}</li>
  });*/

  const handleNavbarSearch = (searchText) => {
      setSearchText(searchText);
  }

  /*setTimeout(() => {
      setCount(count + 1);
  }, 2000);*/

  //console.log('app rendered');

  return (
      <>
          {/*{count < 2 ? <div>Cargando ...</div> : (*/}
              <div>
                  <Navbar onSearch={handleNavbarSearch}/>
                  <Events searchText={searchText}/>
                  {/*<MyFirstComponent propOne={count} propTwo={2} propThree={{}}/>
                  <ul>
                      {items}
                  </ul>
                  <ul>
                      {peopleItems}
                  </ul>*/}
              </div>
          {/*)}*/}
      </>
  )
}

export default App
