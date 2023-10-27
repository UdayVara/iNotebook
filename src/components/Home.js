import React, { useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import Navbar from './Navbar'
import Notes from './Notes'

function Home() {
    return (
        <>
            <Navbar />

            <AddNote />
            <Notes />
            
        </>
    )
}

export default Home
