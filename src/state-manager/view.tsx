import { useEffect, useReducer } from "react";
import { ContentMemo } from "./content";
import { StateContext } from "./context";
import { useFetch } from "./fetch";
import { HeaderMemo } from "./header";
import { LoadingMemo } from "./loading";
import { initial, reducer } from "./state";

export const View = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  const { filters, isLoading, data } = state;
  const { loadData } = useFetch();

  useEffect(() => {
    console.log("useEffect");
    loadData(dispatch, filters);
  }, [filters]);

  return (
    <StateContext.Provider value={{ dispatch, isLoading, data }}>
      <section>
        <HeaderMemo />
        <LoadingMemo />
        <ContentMemo />
      </section>
    </StateContext.Provider>
  );
};
