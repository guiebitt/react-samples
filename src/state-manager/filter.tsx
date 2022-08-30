import { memo, useContext } from "react";
import { StateContext } from "./context";

export const Filter = () => {
  console.log("Filter");
  const { dispatch } = useContext(StateContext);
  return (
    <button
      onClick={() =>
        dispatch({
          type: "CHANGE_FILTER",
          filters: {
            dateFrom: new Date(2000, 1, 1),
            dateTo: new Date(2021, 11, 20),
          },
        })
      }
    >
      change filters
    </button>
  );
};

export const FilterMemo = memo(Filter);
