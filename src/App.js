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

  return (
    <div className='container'>
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
