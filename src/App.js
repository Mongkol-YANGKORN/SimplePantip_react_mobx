import React from "react";
import "./App.css";
import { useObserver } from "mobx-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewNote from "./pages/NewNote";
import Thread from "./pages/Note";
import Home from "./pages/Home";

function App() {
  // const notesStore = useNotesStore();
  // const commentsStore = useCommentsStore();
  // const commentsStore = useCommentStore();
  // console.log(notesStore);

  return useObserver(() => (
    <>
      <Router>
        <nav className="navbar">
          <h1>Clone Patip</h1>
          <div className="links">
            <Link to="/">Home </Link>
            <Link to="/create">Create</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/create" component={NewNote} />
          <Route path="/thread/:id" component={Thread} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  ));
}

export default App;
