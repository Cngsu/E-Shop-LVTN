"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import qs from "query-string";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) return router.push("/");

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );

    router.push(url);
    reset();
  };

  return (
    <div className="flex items-center">
      <input
        autoComplete="off"
        type="text"
        {...register("searchTerm")}
        placeholder="Search items..."
        className="p-2
        border
        border-gray-500
        rounded-l-md
        focus:outline-none
        focus:border-[0.5px]
        focus:border-slate-500
        w-80
        "
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className="
        bg-gray-200
        hover:opacity-80
        text-black
        p-2
        rounded-r-md
        "
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
