import React, { useState } from "react";

export default () => {
  <div>Hello World!</div>;
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([{ body: input }, ...notes]);
  };
  const display =()=>{
    return notes.map((note,i)=>{
      return <li key = {i} >
        {note.body}
      </li>
    })
  }
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
        <input type='submit' value='Add' id="submitButton" />
      </form> 
      <ul className= "container">
       {display()} 
      </ul>
      
    </div>
  );
};
