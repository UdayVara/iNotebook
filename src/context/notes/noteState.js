import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
  let url = "http://localhost:5000"
  const [notes,updateNotes]=useState([])


  // Fetch all notes for particular user
  const fetchAllNotes = async()=>{
    const response = await fetch(`${url}/api/notes/fetchnotes/`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('auth-token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await response.json();
    updateNotes(data)
  }

    // addNote function for adding notes.
    const addNote = async(title,description,tags) =>{
      const response = await fetch(`${url}/api/notes/addnote/`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('auth-token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify({title,description,tags})
    });
    const data = await response.json();
    fetchAllNotes();
    }

    // deleteNote function for deleting notes.
    const deleteNote = async(id) =>{
      const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('auth-token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      fetchAllNotes();
    }
    // addNote function for updating notes.
    const editNote = async(id,title,description,tags) =>{
      console.log(id)
      const response = await fetch(`${url}/api/notes/updatenote/${id}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('auth-token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify({title,description,tags})
      });
      const data = await response.json();
      fetchAllNotes();
    }
    
    return (
        <NoteContext.Provider value={{notes,updateNotes,fetchAllNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;