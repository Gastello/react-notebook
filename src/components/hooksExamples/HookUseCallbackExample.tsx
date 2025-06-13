import React, { useCallback } from "react";
import { useEffect, useState } from "react";

export default function HookUseCallbackExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Parent render!");
  });

  const clickFn = () => {
    console.log("Click!");
  };

  const clickFnMemoized = useCallback(clickFn, []);

  return (
    <div className="flex justify-center gap-2">
      <button
        className="p-1 bg-white text-gray-900"
        onClick={() => setCount((c) => c + 1)}
      >
        Update {`{count: ${count}}`} of Parent Component
      </button>
      <HookUseCallbackExampleButton
        text="without useCallback"
        callback={clickFn}
      />
      <HookUseCallbackExampleButton
        text="with useCallback"
        callback={clickFnMemoized}
      />
    </div>
  );
}

type HookUseCallbackExampleButtonProps = {
  text: string;
  callback: () => void;
};

const HookUseCallbackExampleButton = React.memo(
  function HookUseCallbackExampleButton({
    text,
    callback,
  }: HookUseCallbackExampleButtonProps) {
    useEffect(() => {
      console.log(`Child ${text} render!`);
    });
    return (
      <button
        type="button"
        className="p-1 bg-white text-gray-900"
        onClick={callback}
      >
        Child component {text}
      </button>
    );
  }
);