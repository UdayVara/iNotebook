import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'


function Noteitem(props) {
    const fetchedContext = useContext(noteContext)
    const { deleteNote } = fetchedContext

    const triggerDeleteNote = (e) => {
        deleteNote(e.target.id)
    }

    const showModal = (note) => {

    }
    return (
        <>
            {/* {console.log(props.id)} */}
            <div className="col-md-3 my-3">
                <div className="card shadow-lg rounded" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a className='fs-5 text-danger pt-3' title='Delete'  ><i className="fa-solid fa-trash" id={props.id} onClick={triggerDeleteNote}></i></a>
                        <a className='fs-5 text-primary pt-3 ms-3' title='Edit' name={props._id} onClick={() =>{props.modalButton(props.id)}}><i className="fa-solid fa-pen-to-square"></i></a>
                        <a className='fs-5 text-success pt-3 ms-3' title='Copy' name={props._id}><i className="fa-regular fa-copy"></i></a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Noteitem
