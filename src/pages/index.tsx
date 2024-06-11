import instance from "@/lib/axios/instance";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ColorRing } from "react-loader-spinner";

export default function Home() {
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
          race: target.race.value,
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
    <main
      className={`w-full min-h-screen flex items-center justify-center p-10`}
    >
      <section className="max-w-xl w-full flex flex-col gap-10">
        <header className="w-full flex items-center justify-center text-center">
          <h1 className="text-[clamp(2.5rem,5vw,3rem)] font-bold text-blue-900 drop-shadow">
            Dog Race Catalog
          </h1>
        </header>
        <div className="w-full flex flex-col gap-2">
          <form
            onSubmit={handleSearch}
            className="w-full pl-4 pr-1 py-1 flex items-center rounded-full border bg-white bg-opacity-30 backdrop-blur shadow-md focus-within:border-blue-800 focus-within:shadow-blue-200 transition-all ease-in"
          >
            <input
              name="race"
              title="race"
              placeholder="Input the dog race"
              className="w-full bg-transparent focus:outline-none"
            />
            <button
              disabled={isLoading}
              type="submit"
              className={`px-2 py-2 rounded-full font-semibold text-white hover:brightness-120 active:scale-95 transition-all ease-in ${
                isLoading ? "bg-slate-700" : "bg-blue-800"
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
    </main>
  );
}
