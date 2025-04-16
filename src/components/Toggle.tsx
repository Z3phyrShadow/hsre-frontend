"use client";

import { useState } from "react";

interface ToggleProps {
  label: string;
}

export default function Toggle(props: ToggleProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onClick={() => setPressed((prev) => !prev)}
      className={`inline-flex items-center gap-2 rounded-md border px-3 my-1 text-base transition
        ${
          pressed
            ? "bg-[#2C2C2C] text-[#F5F5F5] border-none"
            : "bg-[#F5F5F5] text-[#757575] border-none hover:bg-gray-100"
        }`}
    >
      {pressed && <span className="text-[#F5F5F5]">✔</span>}
      {props.label}
    </button>
  );
}
