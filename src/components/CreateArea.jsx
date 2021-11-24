import React from "react";
import { useState } from "react";

function CreateArea({newNote}) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const changeNote = (e) => {
    e.preventDefault();
    newNote(note);
  }

  return (
    <div>
      <form>
        <input name="title" value={note.title} placeholder="Title" onChange={handleChange} />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={changeNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
