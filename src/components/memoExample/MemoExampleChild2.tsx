import { useState } from "react";

export default function MemoExampleChild2() {
  const [counter, setCounter] = useState(0);
  console.log("Child without memo rendered");

  const buttonClicked = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <button
      className="p-2 cursor-pointer bg-blue-500 rounded-lg"
      onClick={buttonClicked}
      type="button"
    >
      Child without memo: {counter}
    </button>
  );
}