import React,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext';
function AddNote() {
    const fetchedContext=useContext(noteContext)
    const {addNote} = fetchedContext
    const [newData,updateNewData] = useState({title:"",description:"",tag:""})

    const handleChange = (e) =>{
        updateNewData({...newData,[e.target.name]:e.target.value})
    }

    const triggerAddNote = (e) =>{
        e.preventDefault();
        addNote(newData.title,newData.description,newData.tag)
    }
    return (
        <>
                
            <div className="container mb-3 mt-3 pt-2">
                <h2 className=' mb-3'>Add note : </h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title : </label>
                        <input type="text" className="form-control shadow-lg" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={handleChange}  />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description : </label>
                        <input type="text" className="form-control shadow-lg" id="exampleInputPassword1" name="description" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Tags : </label>
                        <input type="text" className="form-control shadow-lg" id="exampleInputPassword1" name="tags" onChange={handleChange} />
                    </div>
                
                    <button type="submit" className="btn btn-primary" onClick={triggerAddNote}>Submit</button>
                </form>
            </div>  
        </>
    )
}

export default AddNote;
