import { useEffect, useState } from "react";

export default function HookUseEffectExample() {
  const [value, setValue] = useState("");
  useEffect(() => {
    alert("Example Mounted/Created!");
    return () => {
      alert("Example Unmounted/Deleted!");
    };
  }, []);
  useEffect(() => {
    alert("Example Rendered/Updated!");
  });
  useEffect(() => {
    alert('Example Rendered/Updated! Because "value" changed!');
  }, [value]);

  return (
    <div>
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
      <i>&quot;alert&quot; спрацьовує двічі лише у dev режимі!</i>
    </div>
  );
}