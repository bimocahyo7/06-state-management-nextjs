"use client";

import useCouterStore from "@/stores/counterStore";

export default function Counter() {
  const { count, increment, decrement, reset } = useCouterStore();

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4 bg-amber-100 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Count: {count}</h2>
      <div className="flex space-x-2">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition">
          +
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition">
          -
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition">
          Reset
        </button>
      </div>
    </div>
  );
}
