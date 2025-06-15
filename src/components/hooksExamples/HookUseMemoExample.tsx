import { useEffect, useState, memo, useMemo } from "react";

export default function HookUseMemoExample() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  const filteredArray = useMemo(() => {
    return array.filter((x) => x % 2 == 0);
  }, [array]); // мемоїзований результат виконання ф-ї

  useEffect(() => {
    console.log("Parent rendered!");
  });
  return (
    <div className="flex justify-center items-center">
      <button
        className="mr-2 py-2 px-3 font-bold cursor-pointer bg-white text-gray-900 rounded"
        type="button"
        onClick={() => {
          setArray((prev) => [...prev, 2]);
        }}
      >Add an item to Parent state</button>
      <button
        className="mr-2 py-2 px-3 font-bold cursor-pointer bg-white text-gray-900 rounded"
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        {count}
      </button>
      <HookUseMemoExampleChild array={filteredArray} />
    </div>
  );
}

export const HookUseMemoExampleChild = memo(function HookUseMemoExampleChild({
  array,
}: {
  array: number[];
}) {
  useEffect(() => {
    console.log("Array rendered!");
  });

  return (
    <>
      <ul className="flex gap-1">
        {array.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </>
  );
});
