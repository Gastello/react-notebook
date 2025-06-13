import { useState } from "react";

export default function HookUseStateExample() {
  const [value, setValue] = useState("");
  return (
    <div className="flex gap-2.5 items-center justify-center">
      <input
        placeholder="Enter a value"
        className="border border-white p-2"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <div>{value}</div>
    </div>
  );
}