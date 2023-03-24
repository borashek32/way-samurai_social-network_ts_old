import React from "react";
import {rerenderEntireTree} from "./render";
import {store} from "./redux/redux-store";

store.subscribe(rerenderEntireTree)
rerenderEntireTree()