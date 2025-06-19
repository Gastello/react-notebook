import useCustomHook from "./useCustomHook";

export default function CustomHookExample() {
  
  const [currentList, onInputChange] = useCustomHook();

  return (
    <div className="text-xl">
      <div>
        <span className="font-bold mb-2.5">Text: </span>
        {currentList}
      </div>
      <input
        onChange={(e) => onInputChange(e)}
        placeholder="Write here..."
        className="p-1 text-sm border border-white"
        type="text"
      />
    </div>
  );
}
