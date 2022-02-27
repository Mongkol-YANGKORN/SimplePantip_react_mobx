import React, { useState } from "react";
import { commentContext } from "../store";
import "../App.css";

const NewComment = (props) => {
  const { noteId } = props;
  const [form, setForm] = useState({
    text: "",
    writter: "",
  });
  const { addComment } = React.useContext(commentContext);
  const handleSubmit = () => {
    addComment({ ...form, noteId: noteId });
    setForm({
      text: "",
      writter: "",
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <span>Comment Text : </span>
          <input
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            type="text"
          />
        </div>
        <div>
          <span>Comment Writer : </span>
          <input
            value={form.writter}
            onChange={(e) => setForm({ ...form, writter: e.target.value })}
            type="text"
          />
        </div>
        <button type="submit">Comment</button>
      </form>
    </>
  );
};

export default NewComment;
