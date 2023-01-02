import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPT";
import Videos from "./Videos";
import ReactPlayer from "react-player";
import { VideoAndChannel } from "../common/types";
import CheckCircle from "@mui/icons-material/CheckCircle";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<VideoAndChannel>();
  const [videos, setVideos] = useState<VideoAndChannel[]>();
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`/videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`/search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  return (
    <div className="h-screen pt-[84px] flex flex-col lg:flex-row overflow-y-auto custom-scrollbar custom-scrollbar-videoDetail lg:px-12 px-6 mx-auto">
      <div className="lg:flex-1 flex flex-col mb-4">
        <div className="aspect-video w-full">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        <div className="text-white lg:text-xl text-base font-bold p-2">
          {videoDetail?.snippet?.title}
        </div>
        <div className="flex justify-between items-center">
          <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
            <div className="text-gray-500 p-2 text-lg">
              {videoDetail?.snippet?.channelTitle}
              <CheckCircle sx={{ fontSize: "12px" }} />
            </div>
          </Link>
          <div className="flex">
            <div className="text-white text-lg mr-4">
              {videoDetail?.statistics?.viewCount} views
            </div>
            <div className="text-white text-lg">
              {videoDetail?.statistics?.likeCount} likes
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full text-white lg:w-[360px]">
        <Videos videos={videos as VideoAndChannel[]} />
      </div>
    </div>
  );
};

export default VideoDetail;
