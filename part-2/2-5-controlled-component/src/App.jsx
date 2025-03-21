import Note from './components/Note'
import { useState } from 'react'

const App = ({ notesCollection }) => {
  const [notes, setNotes] = useState(notesCollection)
  const [newNote, setNewNote] = useState('a new note...')

  const addNote = (e) => {
    e.preventDefault()
    console.log('button clicked', e.target)
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: String(notes.length + 1),
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
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
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form  >
    </div>
  )
}
export default App