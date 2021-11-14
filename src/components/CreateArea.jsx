import React from "react";
import { useState } from "react";

function CreateArea({newNote}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const changeNote = (e) => {
    e.preventDefault();
    newNote(title, content);
  }

  return (
    <div>
      <form>
        <input name="title" value={title} placeholder="Title" onChange={e=> setTitle(e.target.value)} />
        <textarea name="content" value={content} onChange={e=> setContent(e.target.value)} placeholder="Take a note..." rows="3" />
        <button onClick={changeNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
