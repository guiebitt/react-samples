import React, { Dispatch } from "react";
import { Action, State } from "./state";

export type Context = {
  dispatch: Dispatch<Action>;
} & State;

const init: Context = { dispatch: () => {}, isLoading: false };

export const StateContext = React.createContext(init);
