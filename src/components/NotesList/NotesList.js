import React from 'react';

import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';

export const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div className='notes-list'>
      {notes.map(note => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
