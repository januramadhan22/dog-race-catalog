import React from "react";
import { useRouter } from "next/router";
import { BiChevronLeft } from "react-icons/bi";
import ImageCard from "@/components/fragments/ImageCard";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/themeContext";

const DogRacePage = () => {
  const { theme } = useTheme();
  const { query, back } = useRouter();
  const images = query.result && JSON.parse(query.result as string);

  return (
    <Container>
      <header className="w-full flex items-center justify-start gap-3 text-3xl font-medium text-center">
        <button
          onClick={() => back()}
          className="hover:brightness-110 transition-all ease-linear"
        >
          <BiChevronLeft
            className={`text-4xl  ${
              theme === "light" ? "text-blue-700" : "text-zinc-100"
            }`}
          />
        </button>
        <h1
          className={`leading-none  ${
            theme === "light" ? "text-slate-700" : "text-zinc-100"
          }`}
        >
          Result for {`'${query.race}'`} race
        </h1>
      </header>
      <div className="relative w-full min-h-screen grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 transition-all ease-in">
        {images?.map((image: string, index: number) => (
          <div key={index} className="h-[400px] md:h-full">
            <ImageCard image={image}>
              <div className="absolute bottom-0 left-0 py-5 px-3 w-full flex justify-center items-center rounded-xl bg-black bg-opacity-20 backdrop-blur group-hover:translate-y-0 translate-y-full opacity-0 group-hover:opacity-100 transition-all ease-in-out">
                <button
                  id="view-image"
                  onClick={() => window.open(image, "_blank")}
                  className="w-full px-5 py-2 bg-blue-600 rounded-lg text-sm text-white hover:brightness-110 active:scale-95 transition-all ease-in"
                >
                  View
                </button>
              </div>
            </ImageCard>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DogRacePage;
