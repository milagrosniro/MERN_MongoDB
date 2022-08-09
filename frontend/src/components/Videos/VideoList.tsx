import { useEffect, useState } from "react";
import { IVideo } from "../../interfaces/videos";
import { getAllVideos } from "../../services/videoService";
import VideoItem from "./VideoItem";
import '../../css/videoList.css'

const VideoList = () => {
  const [allVideos, setAllVideos] = useState<IVideo[]>([]);

  const loadVideos = async () => {
    const res = await getAllVideos();

    const videosSort = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setAllVideos(videosSort);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="container-videoList">
      {allVideos.length > 0 &&
        allVideos.map((video) => (
          <VideoItem key={video._id} video={video} loadVideos={loadVideos} />
        ))}
    </div>
  );
};

export default VideoList;
