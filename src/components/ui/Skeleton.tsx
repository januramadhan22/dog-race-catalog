import { useTheme } from "@/context/themeContext";
import React from "react";

const Skeleton = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`relative w-full h-full p-5 flex flex-col justify-between gap-3 animate-pulse ${
        theme === "light" ? "bg-slate-300" : "bg-slate-700"
      }`}
    >
      <div className="w-full flex flex-col gap-3">
        <div
          className={`w-1/2 h-5 rounded-md ${
            theme === "light" ? "bg-slate-500" : "bg-slate-800"
          }`}
        />
        <div
          className={`w-full h-5 rounded-md ${
            theme === "light" ? "bg-slate-500" : "bg-slate-800"
          }`}
        />
      </div>
      <div
        className={`w-full h-10 rounded-md ${
          theme === "light" ? "bg-slate-500" : "bg-slate-800"
        }`}
      ></div>
    </div>
  );
};

export default Skeleton;
