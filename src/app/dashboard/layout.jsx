import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div>Dashboard Layout</div>
      <h1>Navbar</h1>
      <div>{children}</div>
      <h1>Footer</h1>
    </div>
  );
}
