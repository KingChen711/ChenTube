import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPT";
import { VideoAndChannel } from "../common/types";

const ChannelDetail = () => {
  const [channel, setChannel] = useState<VideoAndChannel>();
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`/channels?part=snippet&id=${id}`).then((data) =>
      setChannel(data?.items[0])
    );
    fetchFromAPI(`/search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <div className="pt-[84px] h-screen flex flex-col">
      <div className="overflow-y-auto custom-scrollbar px-2">
        <img
          className="w-full aspect-[6/1] object-cover"
          src={channel?.brandingSettings?.image?.bannerExternalUrl}
          alt=""
        />
        <ChannelCard channel={channel as VideoAndChannel} />
        <div className="custom-scrollbar">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
