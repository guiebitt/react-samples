import { memo } from "react";
import { FilterMemo } from "./filter";

export const Header = () => {
  console.log("Header");
  return (
    <section>
      <h1>State Manager</h1>
      <FilterMemo />
    </section>
  );
};

export const HeaderMemo = memo(Header);
