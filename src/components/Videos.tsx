import React from "react";
import { Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { VideoAndChannel } from "../common/types";

interface VideosProps {
  videos: VideoAndChannel[];
}

const Videos = (props: VideosProps) => {
  const { videos } = props;

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
      {videos?.map((item: VideoAndChannel, idx: number) => {
        return (
          <div
            className="max-w-[320px] flex-1 min-w-[240px] rounded-lg overflow-hidden"
            key={idx}
          >
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </div>
        );
      })}
    </Stack>
  );
};

export default Videos;
