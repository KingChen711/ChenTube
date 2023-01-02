import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPT";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    async function getVideos() {
      await fetchFromAPI(`/search?part=snippet&q=${searchTerm}`).then((res) =>
        setVideos(res.items)
      );
    }
    getVideos();
  }, [searchTerm]);

  return (
    <div className="flex flex-col pt-[84px] h-screen">
      <div className="text-white text-center md:text-3xl font-bold text-base mb-2 px-2">
        Search result for <span className="text-red-primary">{searchTerm}</span>{" "}
        videos
      </div>
      <div className="overflow-y-auto custom-scrollbar px-2">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default SearchFeed;
