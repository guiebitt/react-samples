import { memo } from "react";
import { StateContext } from "./context";

export const List = () => {
  console.log("List");
  return (
    <StateContext.Consumer>
      {({ data }) => <>{data && data.map((d: number) => <p>{d}</p>)}</>}
    </StateContext.Consumer>
  );
};

export const ListMemo = memo(List);
