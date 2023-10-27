import React, { useState, useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'


function Notes() {
    const fetchedData = useContext(noteContext)
    let { notes, fetchAllNotes,editNote } = fetchedData
    useEffect(() => {
        fetchAllNotes();
    }, [])

    const [editableNote, updateeditableNote] = useState({title:"",description:"",tags:""});
    const [updatedNote, updateUpdatedNote] = useState({title:"",description:"",tags:""});

    const showModal = (id) => {
        document.getElementById("modalToggler").click();
        notes.forEach(element => {
            if (element._id==id) {  
                console.log(element)
                updateeditableNote(element);
                updateUpdatedNote(element);
            }
        });
    }

    const handleChangeModal = (e) =>{
        updateUpdatedNote({...updatedNote,[e.target.name]:e.target.value})
        console.log(updatedNote)
    }

    const saveUpdatedNote = () =>{
        editNote(editableNote._id,updatedNote.title,updatedNote.description,updatedNote.tags)
        document.getElementById("closeModalBtn").click();
    }
    // console.log(notes)
    return (
        <>
            <div className="container">
                <div className="row">
                    {notes.length!==0 ? notes.map((note) => {
                        // {console.log(note._id)}
                        return <Noteitem key={note._id} title={note.title} description={note.description} id={note._id} modalButton={showModal}  />
                    }): <h3>No notes to Display</h3>}
                </div>
            </div>

            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" id='modalToggler'>
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Note : </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title : </label>
                        <input type="text" defaultValue={editableNote.title} className="form-control shadow-lg" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={handleChangeModal}  />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description : </label>
                        <input type="text" defaultValue={editableNote.description} className="form-control shadow-lg" id="exampleInputPassword1" name="description" onChange={handleChangeModal}  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Tags : </label>
                        <input type="text" className="form-control shadow-lg" id="exampleInputPassword1" name="tags" onChange={handleChangeModal} defaultValue={editableNote.tags} />
                    </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeModalBtn">Close</button>
                            <button type="button" className="btn btn-primary" onClick={saveUpdatedNote}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes
