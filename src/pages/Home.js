import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { noteContext } from "../store";
import "../App.css";

// export default function Home() {

const Home = observer(() => {
  const { getNotes, removeNote } = React.useContext(noteContext);
  const notes = getNotes();
  return (
    <div className="home">
      <div className="blog-list">
        {notes.length ? (
          <ul>
            {notes.map((note) => (
              <div className="blog-preview" key={note.id}>
                <Link to={`/thread/${note.id}`}>
                  <div>{note.topic}</div>
                </Link>
                <br />
                <button onClick={() => removeNote(note.id)}>Delete</button>
              </div>
            ))}
          </ul>
        ) : (
          <div className="blog-preview">
            <div>Note is empty.</div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Home;
