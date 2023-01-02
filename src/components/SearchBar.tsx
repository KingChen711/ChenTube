import React from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormValues = {
  searchText: string;
};

const SearchBar = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();
  function onSubmit(data: { searchText: string }) {
    navigate(`/search/${data.searchText}`);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex rounded-3xl w-96 bg-white px-4"
    >
      <div className="flex items-center flex-1">
        <input
          className="w-full border-none outline-none"
          type="text"
          placeholder="Search..."
          {...register("searchText", { required: true })}
        />
      </div>

      <IconButton type="submit" className="block">
        <SearchIcon sx={{ color: "primary.main" }} />
      </IconButton>
    </form>
  );
};

export default SearchBar;
