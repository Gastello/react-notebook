import { memo, useState } from "react";

function MemoExampleChild() {
  const [counter, setCounter] = useState(0);
  console.log("Child with memo rendered");

  const buttonClicked = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <button
      className="p-2 cursor-pointer bg-blue-500 rounded-lg"
      onClick={buttonClicked}
      type="button"
    >
      Child with memo: {counter}
    </button>
  );
}
MemoExampleChild.displayName = "MemoExampleChild";
export default memo(MemoExampleChild);