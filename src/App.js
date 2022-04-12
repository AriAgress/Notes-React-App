import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList/NotesList';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is 1 note',
      date: '13/04/2001',
    },
    {
      id: nanoid(),
      text: 'This is 2 note',
      date: '13/04/2001',
    },
    {
      id: nanoid(),
      text: 'This is 3 note',
      date: '13/04/2001',
    },
  ]);

  const addNote = text => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className='container'>
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
