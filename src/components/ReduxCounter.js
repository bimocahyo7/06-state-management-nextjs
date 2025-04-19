"use client";

import { decrement, increment } from "@/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-indigo-100 rounded-md">
      <h2 className="text-2xl font-bold text-slate-800">Redux Count: {count}</h2>
      <div className="flex space-x-3">
        <button
          onClick={() => dispatch(increment())}
          className="px-5 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow hover:bg-indigo-600 transition">
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-5 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow hover:bg-indigo-600 transition">
          -
        </button>
      </div>
    </div>
  );
}
