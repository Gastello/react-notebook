import { useZustandStore } from "./zustand";

export default function ZustandExample() {
  const beerCount = useZustandStore((state) => state.beers);
  const addBeer = useZustandStore((state) => state.addBeer);
  const removeBeer = useZustandStore((state) => state.removeBeer);
  const resetBeer = useZustandStore((state) => state.resetBeer);

  return (
    <div className="flex flex-col">
      <div className="mx-auto mb-2.5 text-xl">
        You have {beerCount} <span>🍺</span>
      </div>
      <div className="flex gap-2.5 mx-auto">
        <button
          onClick={addBeer}
          className="font-bold p-2 bg-white text-gray-900 rounded"
        >
          Add 🍺
        </button>
        <button
          onClick={resetBeer}
          className="font-bold p-2 bg-white text-gray-900 rounded"
        >
          Reset 🍺
        </button>
        <button
          onClick={removeBeer}
          className="font-bold p-2 bg-white text-gray-900 rounded"
        >
          Remove 🍺
        </button>
      </div>
    </div>
  );
}
