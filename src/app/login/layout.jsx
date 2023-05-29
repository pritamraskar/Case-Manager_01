import React from "react";

export default function LoginLayout({ children }) {
  return (
    <div className="bg-primaryBlue w-[100vw] h-[100vh] flex justify-center items-center">
      <div>{children}</div>
    </div>
  );
}
