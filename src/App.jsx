import {useState} from 'react'
import './App.css'
import {Navbar} from "./components/Navbar/index.jsx";
import {Events} from "./components/Events/index.jsx";
import {SignUpForm} from "./components/SignUpForm/index.jsx";


function App() {
  const [searchText, setSearchText] = useState("");

  const handleNavbarSearch = (searchText) => {
      setSearchText(searchText);
  }

  return (
      <>
          <Navbar onSearch={handleNavbarSearch}/>
          <Events searchText={searchText}/>
          {/*<SignUpForm />*/}
      </>
  )
}

export default App
