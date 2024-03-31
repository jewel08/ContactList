import React, { useState } from 'react'

export default function AddContacts({addContact}) {
    const [contactData,setContactData]=useState({name:'',email:''});

    const handleChange=(e)=>{
        if(e.target.name==="name"){
            setContactData({...contactData,name:e.target.value})
        }
        else{
            setContactData({...contactData,email:e.target.value})
        }
        
    }

    const handleAdd=(e)=>{
        e.preventDefault();
        if(contactData.name==='' || contactData.email===''){
            alert("please fill all the detail");
            return ;
        }
        addContact(contactData);
        setContactData({name:'',email:''});
    }
  return (
    <div className='formHeader'>
         <div className='add-contact'> Add contacts</div>
        <form className='form'>
            <label>Name:</label><br/>
            <input type='text' placeholder='Enter name' name='name' value={contactData.name}
            onChange={handleChange} /><br/>
            <label>Gmail</label><br/>
            <input type='email' placeholder='Enter Gmail' name='email' value={contactData.email}
            onChange={handleChange} />
        </form>
        <button className='btn' onClick={handleAdd}>AddContact</button>
    </div>
  )
}
