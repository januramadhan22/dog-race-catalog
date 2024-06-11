import Container from "@/components/ui/Container";
import { useTheme } from "@/context/themeContext";
import instance from "@/lib/axios/instance";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ColorRing } from "react-loader-spinner";

export default function Home() {
  const { theme } = useTheme();
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    status: false,
    message: "",
  });

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;

    setIsLoading(true);
    try {
      const response = await instance.get(
        `/breed/${target.race.value.toLowerCase()}/images/random/12`
      );
      push({
        pathname: "/dog",
        query: {
          race: target.race.value.toLowerCase(),
          result: JSON.stringify(response.data.message),
        },
      });
    } catch (error: any) {
      setIsError({ status: true, message: error.response.data.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <section className="max-w-xl w-full flex flex-col gap-10">
        <header className="w-full flex items-center justify-center text-center">
          <h1
            className={`text-[clamp(2.5rem,5vw,3rem)] font-bold drop-shadow ${
              theme === "light" ? "text-blue-800" : "text-zinc-200"
            }`}
          >
            Dog Race Catalog
          </h1>
        </header>
        <div className="w-full flex flex-col gap-2">
          <form
            onSubmit={handleSearch}
            className={`w-full pl-4 pr-1 py-1 flex items-center rounded-full border bg-opacity-30 backdrop-blur shadow  transition-all ease-in ${
              theme === "light"
                ? "bg-white focus-within:border-blue-800 focus-within:shadow-blue-200"
                : "bg-transparent focus-within:border-blue-400 focus-within:shadow-blue-200"
            }`}
          >
            <input
              disabled={isLoading}
              name="race"
              title="race"
              placeholder="Input the dog race"
              className={`w-full bg-transparent focus:outline-none autofill:bg-transparent ${
                theme === "light" ? "text-black" : "text-zinc-100"
              }`}
            />
            <button
              disabled={isLoading}
              type="submit"
              className={`px-2 py-2 rounded-full font-semibold hover:brightness-120 active:scale-95 transition-all ease-in ${
                isLoading
                  ? "bg-slate-700 text-white"
                  : theme === "light"
                  ? "bg-blue-800 text-white"
                  : "bg-zinc-100 text-blue-800"
              }`}
            >
              {isLoading ? (
                <ColorRing
                  visible={true}
                  height="18"
                  width="18"
                  ariaLabel="color-ring-loading"
                  wrapperClass="color-ring-wrapper"
                  colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                />
              ) : (
                <FaSearch className="text-lg" />
              )}
            </button>
          </form>
          {isError.status && (
            <p className="w-full px-4 text-sm text-red-500">
              {isError.message}
            </p>
          )}
        </div>
      </section>
    </Container>
  );
}
