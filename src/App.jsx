import React, { useState } from "react";
import axios from 'axios';

export default () => {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkInput(input)) {
      setInput("");
      e.target[0].placeholder = "Add note";
      return setNotes([{ body: input }, ...notes]);
    } else {
      e.target[0].placeholder = "Please add a note!";
    }
  };

  const display = () => {
    return notes.map((note, i) => {
      return <div key={note.body.id}>
        <li className="listStyle">
          {note.body} 
        </li>
        <button onClick={deleteToDo(note.body.id)}>Delete</button>
      </div>
    });
  };


  const deleteToDo = (id) => {
    await axios.delete(`delete/${id}`);
  }

  const checkInput = (data) => {
    if (!data) return true;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder='add note'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <input type='submit' value='Add' id='submitButton' />
      </form>
      <ul className='container'>{display()}</ul>
    </div>
  );
};