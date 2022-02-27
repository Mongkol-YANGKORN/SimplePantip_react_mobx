import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { noteContext, commentContext } from "../store";
import NewComment from "../components/NewComment";
import "../App.css";

// export default function Note() {
const Note = observer(() => {
  const { getNote } = React.useContext(noteContext);
  const { getComments, removeComment } = React.useContext(commentContext);
  const { id } = useParams();
  const note = getNote(id);
  const comments = getComments(id);

  return !note ? (
    <div>Note not found</div>
  ) : (
    <div className="blog-details">
      <article>
        <div>Topic : {note.topic}</div>
        <div>Thread : {note.text}</div>
        <div>Writter : {note.writter}</div>
      </article>
      <hr />
      <NewComment noteId={id} />
      <hr />
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <div>Comment Topic: {comment.text}</div>
            <div>Comment Writer: {comment.writter}</div>
            <button onClick={() => removeComment(comment.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Note;
