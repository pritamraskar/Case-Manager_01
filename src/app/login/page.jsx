"use client";
import React from "react";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  return (
    <div>
      LoginPage
      <div
        className="bg-red-200 px-4 py-2 w-fit rounded text-black"
        onClick={() => toast.success("Successfully toasted!")}
      >
        Open Toast
      </div>
    </div>
  );
}
