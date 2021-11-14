import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([{
    title: "",
    content: ""
  }]);

  const newNote = (title, content) => {
    setNote(()=>{
      return {
        ...note,
        title,
        content,
      }
    })
    console.log(note);
  }

  return (
    <div>
      <Header />
      <CreateArea newNote={newNote} />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
