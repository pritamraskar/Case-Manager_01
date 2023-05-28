import Navbar from "@/components/common/Navbar";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div>Dashboard Layout</div>
      <Navbar />
      <div>{children}</div>
      <h1>Footer</h1>
    </div>
  );
}
