import { useRef } from "react";

export default function HookUseRefExample() {
  const counter = useRef(0);

  return (
    <div>
      <button
        onClick={() => {
          counter.current++;
          console.log("counter useRef value:", counter.current);
            }}
        className="p-2 bg-white rounded text-gray-900"
      >
        Change counter useRef value: {counter.current}
      </button>
    </div>
  );
}
