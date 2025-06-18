import { useRef } from "react";
import { useEffect } from "react";
import { useReducer } from "react";

type State = {
  list: string[];
};
type Action =
  | { type: "add"; payload: string }
  | { type: "reset" }
  | { type: "shift" }
  | { type: "pop" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "add":
      return { list: [...state.list, action.payload] };
    case "reset":
      return { list: [] };
    case "shift":
      return { list: state.list.slice(1) };
    case "pop":
      return { list: state.list.slice(0, -1) };
  }
}

export default function HookUseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { list: [] });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [state.list]);

  return (
    <div>
      <div className="mb-2">
        <span className="font-bold text-xl">List: </span>
        {state.list.join(", ")}
      </div>
      <input
        ref={inputRef}
        type="text"
        className="w-full border border-white rounded p-2 mb-2"
      />
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() =>
            dispatch({ type: "add", payload: inputRef.current?.value ?? "" })
          }
          className="p-2 bg-white text-gray-900 rounded"
        >
          Add
        </button>
        <button
          onClick={() => dispatch({ type: "shift" })}
          className="p-2 bg-white text-gray-900 rounded"
        >
          Delete first
        </button>
        <button
          onClick={() => dispatch({ type: "pop" })}
          className="p-2 bg-white text-gray-900 rounded"
        >
          Delete last
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="p-2 bg-white text-gray-900 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
