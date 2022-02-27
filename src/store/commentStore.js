import { types } from "mobx-state-tree";
let counter = 1;

const comment = types.model("comment", {
  id: types.string,
  text: types.string,
  writter: types.string,
  noteId: types.string,
});


const commentStore = types
  .model("comments", {
    comments: types.optional(types.array(comment), []),
  })
  .actions((self) => ({
    addComment(commentData) {
      self.comments.push({ id: `comment-${counter}`, ...commentData });
      counter += 1;
      console.log("comment", commentData);
    },
    removeComment(id) {
      self.comments = self.comments.filter((comment) => comment.id !== id);
    },
  }))
  .views((self) => ({
    getComments(noteId) {
      return self.comments.filter((c) => c.noteId === noteId);
    },
    getComment(id, noteId) {
      return self.comments.find(
        (comment) => comment.id === id && comment.noteId === noteId
      );
    },
  }));

export default commentStore.create();
