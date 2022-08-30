import { memo } from "react";
import { ListMemo } from "./list";

export const Content = () => {
  console.log("Content");
  return (
    <section>
      <h2>Dados:</h2>
      <ListMemo />
    </section>
  );
};

export const ContentMemo = memo(Content);
