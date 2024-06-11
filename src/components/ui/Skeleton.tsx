import React from "react";

const Skeleton = () => {
  return (
    <div className="relative w-full h-full p-5 flex flex-col justify-between gap-3 bg-slate-300 animate-pulse">
      <div className="w-full flex flex-col gap-3">
        <div className="w-1/2 h-5 rounded-md bg-slate-500" />
        <div className="w-full h-5 rounded-md bg-slate-500" />
      </div>
      <div className="w-full h-10 rounded-md bg-slate-500"></div>
    </div>
  );
};

export default Skeleton;
