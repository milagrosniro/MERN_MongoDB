import ReactPlayer from "react-player/lazy";
import { IVideo } from "../../interfaces/videos";
import '../../css/videoItem.css'
import { useNavigate } from "react-router-dom";
import { deleteVideo } from "../../services/videoService";
import '../../css/videoItem.css'

interface IProps {
  video: IVideo;
  loadVideos : () => void
}

const VideoItem = ({ video, loadVideos }: IProps) => {
  const history = useNavigate()

  const onClick = () =>{
    history(`/update/${video._id}`)
  }

  const handleDelete = async (id: string) => {
    await deleteVideo(id)
    loadVideos()
  }
  return (
    <div className="container-videoItem">
      
      <div className="wrap-video" >
        <div className="head-card">
          <h1 onClick={onClick}>{video.title}</h1>
          <span  onClick={() => video._id && handleDelete(video._id)}>x</span>
        </div>
        
          <div className="">
          <ReactPlayer className='react-player'
          url= {video.url}
          width='100%'
          height='100%' />
          </div>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
