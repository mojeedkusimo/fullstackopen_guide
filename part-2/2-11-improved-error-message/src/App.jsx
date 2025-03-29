import Note from './components/Note';
import { useState,useEffect } from 'react';
import noteService from './services/notes';
import Notification from './components/Notification';
import Footer from './components/Footer';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note...');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then(returnedNotes => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNotes));
      })
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  };

  
  
  const addNote = (e) => {
    e.preventDefault();
    
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      // id: String(notes.length + 1),
    };
    
    noteService
    .create(noteObject)
      .then(returnedNotes => {
        setNotes(notes.concat(returnedNotes));
        setNewNote('');
      })
      
      setNotes(notes.concat(noteObject));
      setNewNote('');
    }
    
    const handleNoteChange = (e) => {
      setNewNote(e.target.value);
    }
    
    const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important);
    
    useEffect(() => {
      noteService
        .getAll()
        .then(initialNotes => {
          setNotes(initialNotes);
        })
    }, []);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <br />
      <ul>

        {notesToShow.map(note =>
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form  >
      <Footer />
    </div>
  )
}
export default App