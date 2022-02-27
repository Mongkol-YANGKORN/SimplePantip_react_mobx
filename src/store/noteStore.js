import { types } from "mobx-state-tree";
let counter = 1;

const note = types.model("note", {
  id: types.string,
  topic: types.string,
  text: types.string,
  writter: types.string,
});

const noteStore = types
  .model( {
    notes: types.optional(types.array(note), []),
  })
  .actions((self) => ({
    addNote(noteData) {
      self.notes.push({ id: `${counter}`, ...noteData });
      counter += 1;
      console.log("note",noteData);
    },
    removeNote(id) {
      self.notes = self.notes.filter((note) => note.id !== id);
    },
  }))
  .views((self) => ({
    getNotes() {
      return self.notes;
    },
    getNote(id) {
      return self.notes.find((note) => note.id === id);
    },
  }));

export default noteStore.create();
// const noteStore = types

// let genId = 0;
// export function createNotesStore() {
//   return {
//     notes: [],
//     addNote(noteText, noteTopic, noteWritter) {
//       console.log(noteText, noteTopic, noteWritter, this.notes);
//       this.notes.push({
//         noteText,
//         id: genId++,
//         noteTopic,
//         noteWritter,

//       });
//     },

//     removeNote(id) {
//       this.notes = this.notes.filter((note) => note.id !== id);
//     },

//   };
// }
