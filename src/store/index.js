import React from "react";
import commentStore from "./commentStore";
import noteStore from "./noteStore";

export const noteContext = React.createContext(noteStore);
export const commentContext = React.createContext(commentStore);
