"use client";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function UserProfile() {
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/users/1", fetcher);

  if (error) return <div className="text-red-500 text-center font-semibold">Failed to load</div>;

  if (isLoading) return <div className="text-black text-center font-semibold">Loading...</div>;

  return (
    <div className="max-w-sm mx-auto p-6 bg-rose-200 rounded-lg border-2 border-slate-700">
      <h2 className="text-xl font-bold text-gray-800 mb-4">User Profile</h2>
      <p className="text-gray-700">
        <span className="font-semibold">Name:</span> {data?.name}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Email:</span> {data?.email}
      </p>
    </div>
  );
}
