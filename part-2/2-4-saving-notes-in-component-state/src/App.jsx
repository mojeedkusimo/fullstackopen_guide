import Note from './components/Note'
import { useState } from 'react'

const App = ({ notesCollection }) => {
  const [notes, setNotes] = useState(notesCollection)

  const addNote = (e) => {
    e.preventDefault()
    console.log('button clicked', e.target)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>

        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input />
        <button type="submit">save</button>
      </form  >
    </div>
  )
}
export default App