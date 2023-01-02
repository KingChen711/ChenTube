export interface VideoAndChannel {
  id: {
    videoId?: string;
    channelId?: string;
  };
  snippet: {
    channelId?: string;
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    channelTitle?: string;
  };
  statistics?: {
    subscriberCount: string;
    viewCount:string,
    likeCount:string
  };
  brandingSettings?: {
    image?: {
      bannerExternalUrl: string;
    };
  };
}
