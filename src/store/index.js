import { Action, createStore } from "redux";
import reducer from "../reducer/index";

export function makeStore() {
  return createStore(reducer, {
    lastUpdate: 0,
    todos: [
      "Make the fire!",
      "Fix the breakfast!",
      "Wash the dishes!",
      "Do the mopping!"
    ]
  });
}
