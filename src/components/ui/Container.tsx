import { useTheme } from "@/context/themeContext";
import React, { FC, ReactNode } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

interface ContainerProps {
  children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <main
      className={`relative w-full min-h-screen flex flex-col items-center justify-center gap-5 p-10 ${
        theme === "light" ? "bg-zinc-100" : "bg-slate-900"
      }`}
    >
      <button
        title={theme === "light" ? "turn on dark mode" : "turn on light mode"}
        onClick={toggleTheme}
        className={`fixed z-50 right-14 bottom-10 w-14 h-14 rounded-full flex justify-center items-center text-3xl shadow hover:brightness-110 active:scale-90 transition-all ease-in-out ${
          theme === "light"
            ? "bg-blue-800 text-white shadow-slate-700"
            : "bg-zinc-200 text-blue-800 shadow-zinc-500"
        }`}
      >
        {theme === "dark" ? <MdLightMode /> : <MdNightlight />}
      </button>

      {children}
    </main>
  );
};

export default Container;
