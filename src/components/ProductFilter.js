"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "all";

  const setCategory = (newCategory) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", newCategory);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-lime-200 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Filter by Category</h3>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border-2 rounded-md bg-slate-50">
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
    </div>
  );
}
