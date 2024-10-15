import { useEffect, useState } from 'react'
import PersonClass from './components/PersonClass'
import {data} from './data/module-data'
import './App.css'
import SimpleLayout from './layouts/Layout.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [profiles, setProfiles]=useState([]);
  const menuItems = [
    {id: 1, label: "Home",url:"/Home"},
    {id: 2, label: "Laboratorium 1",url:"/Home"}, 
    {id: 3, label: "Laboratorium 2",url:"/Home"}
  ];
  useEffect(()=>{
    setProfiles(data);
  }, []);
  return (
    <>
      <SimpleLayout items={menuItems}>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          
          {profiles.map(person=>(
            <PersonClass key={person.id} person={person} />
          ))}
        </div> 
      </SimpleLayout>
    </>
  )
}

export default App
