import {Routes,Route} from 'react-router-dom';
//import {useReducer} from 'react';
//import { data } from "./data/module-data";
// import './App.css'
//import AppContext from './data/AppContext.js'
//import AppReducer from './data/AppReducer.js'
import RootLayout from './layouts/RootLayout.jsx'
import Lab1 from  './pages/Lab1.jsx'
import Lab2 from  './pages/Lab2.jsx'
import Lab3 from  './pages/Lab3.jsx'
import Home from  './pages/home.jsx'
import NotFound from  './pages/NotFound.jsx'
import AddForm from './components/AddForm.jsx';
import EditForm from './components/EditForm.jsx';
import AppProvider from './data/AppProvider.js';

function App() {
 

  const menuItems = [
    {id: 1, label: "Home",url:"/",urlPattern:"/",element:<Home/>},
    {id: 2, label: "Lab1",url:"/Lab1",urlPattern:"/Lab1",element:<Lab1/>}, 
    {id: 3, label: "Lab2",url:"/Lab2/:id",urlPattern: "/lab2/:id",element:<Lab2/>},
    {id: 4, label: "Lab3",url:"/Lab3",urlPattern:"/Lab3",element:<Lab3/>}, 
    {id: 5, label: "Add",url:"/Lab4/add",urlPattern:"/Lab4/add",element:<AddForm/>}, 
    {id: 6, label: "Edit",url:"/Lab4/edit/:id",urlPattern:"/Lab4/edit/:id",element:<EditForm/>} 
    
  ];
  return (
    <>
      <AppProvider>
        <RootLayout items={menuItems}>
          <Routes>
                {menuItems.map(item=>(
                  <Route path={item.url} element={item.element} key={item.id}></Route>
                ))}
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </RootLayout>
      </AppProvider>
    </>
  )
}

export default App
