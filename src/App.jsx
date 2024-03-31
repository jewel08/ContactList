import { useEffect, useState } from 'react'

import AddContacts from './components/AddContacts'
import Contactlist from './components/Contactlist'
import Header from './components/Header'
import uuid4 from 'uuid4';
import './App.css'
function App() {
  const localStorageKey = 'contact';
  const[contact,setContact]= useState(()=>{
   return JSON.parse(localStorage.getItem(localStorageKey))
  || [] });
  
useEffect(()=>{
  localStorage.setItem(localStorageKey,JSON.stringify(contact))
},[contact])

  const addContact=(data)=>{
    setContact([...contact,{id: uuid4(),data} ]);
  }
  const removeContact=(id)=>{
    const updatedList= contact.filter((val)=>{
      return val.id!==id;
    })
    setContact(updatedList);
  }
  return (
    <>
      <Header></Header>
      <AddContacts addContact={addContact}></AddContacts>
      <Contactlist contact={contact} removeContact={removeContact}></Contactlist>
    </>
  )
}

export default App
