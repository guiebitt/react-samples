import { Dispatch } from "react";
import { Action, Filter } from "./state";

export const useFetch = () => {
  const loadData = (dispatch: Dispatch<Action>, filtersChanged?: Filter) => {
    new Promise((resolve) => {
      console.log("filters", filtersChanged);
      setTimeout(() => {
        dispatch({
          type: "LOADED",
          data: [1, 2, 3],
        });
        resolve(null);
      }, 2000);
    });
  };

  return {
    loadData,
  };
};
