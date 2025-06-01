import { useState } from "react";
import classNames from "classnames";

import MemoExampleChild from "./MemoExampleChild";
import MemoExampleChild2 from "./MemoExampleChild2";

export default function MemoExample() {
  const [isBlack, setIsBlack] = useState(true);
  console.log("Parent Function Component rendered");
  const changeBtnColor = () => {
    setIsBlack((prev) => !prev);
  };

  return (
    <>
      <div className="py-2 flex items-center justify-center gap-3">
        <button
          onClick={changeBtnColor}
          className={classNames(
            "cursor-pointer p-2 rounded-lg",
            { "bg-black": isBlack },
            { "text-white": isBlack },
            { "bg-white": !isBlack },
            { "text-black": !isBlack }
          )}
        >
          Parent Function Component
        </button>
        <MemoExampleChild />
        <MemoExampleChild2 />
      </div>
    </>
  );
}
