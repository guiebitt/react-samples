import { memo } from "react";
import { StateContext } from "./context";

export const Loading = () => {
  console.log("Loading");
  return (
    <StateContext.Consumer>
      {({ isLoading }) => <>{isLoading && <div>CARREGANDO...</div>}</>}
    </StateContext.Consumer>
  );
};

export const LoadingMemo = memo(Loading);
