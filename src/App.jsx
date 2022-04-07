import React, { useState } from "react";

export default () => {
  <div>Hello World!</div>;
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([{ body: input }, ...notes]);
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
        <input type='submit' value='Add' />
      </form>
    </div>
  );
};
