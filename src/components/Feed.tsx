import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPT";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getVideos() {
      await fetchFromAPI(`/search?part=snippet&q=${selectedCategory}`).then(
        (res) => setVideos(res.items)
      );
    }
    getVideos();
  }, [selectedCategory]);

  return (
    <div className="flex md:flex-row flex-col pt-[84px] h-screen">
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="bg-black text-white px-4 overflow-y-auto flex flex-col custom-scrollbar">
        <div className="text-3xl font-semibold mb-2 mt-2">
          {selectedCategory}
          <span className="text-red-primary ml-2">videos</span>
        </div>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
