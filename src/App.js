import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList/NotesList';
import Search from './components/Search/Search';
import Header from './components/Header/Header';

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

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

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

  const deleteNote = id => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter(note =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
