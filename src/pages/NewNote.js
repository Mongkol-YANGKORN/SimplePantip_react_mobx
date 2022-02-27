import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { noteContext } from "../store";
import "../App.css";

const NewNote = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    topic: "",
    text: "",
    writter: "",
  });
  const { addNote } = React.useContext(noteContext);
  const handleSubmit = async () => {
    await addNote(form);
    history.push("/home");
  };

  return (
    <>
      <div className="create">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <span>Topic</span>
            <input
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
              type="text"
              required
            />
          </div>
          <div>
            <span>Body</span>
            <input
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              type="text"
              required
            />
          </div>
          <div>
            <span>Wriiter</span>
            <input
              value={form.writter}
              onChange={(e) => setForm({ ...form, writter: e.target.value })}
              type="text"
              required
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default NewNote;
