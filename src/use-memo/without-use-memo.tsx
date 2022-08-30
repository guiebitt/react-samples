import { useState } from "react";

export const WithoutUseMemoSample = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const isEven1 = counter1 % 2 === 0;
  console.log("without", "condição isEven 1");

  const isEven2 = counter2 % 2 === 0;
  console.log("without", "condição isEven 2");

  const handleClickAdd1 = () => {
    setCounter1(counter1 + 1);
  };

  const handleClickAdd2 = () => {
    setCounter2(counter2 + 1);
  };

  return (
    <section
      style={{
        margin: "20px",
      }}
    >
      <h1>Without Use Memo</h1>
      <article
        style={{
          margin: "20px",
        }}
      >
        <h2>Counter 1</h2>
        {counter1}
        <button onClick={handleClickAdd1}>+</button>
        <br />É par? {`${isEven1}`}
      </article>
      <article
        style={{
          margin: "20px",
        }}
      >
        <h2>Counter 2</h2>
        {counter2}
        <button onClick={handleClickAdd2}>+</button>
        <br />É par? {`${isEven2}`}
      </article>
    </section>
  );
};
