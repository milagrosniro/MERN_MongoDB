
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IVideo } from "../../interfaces/videos";
import { createVideo, getVideo, updateVideo } from '../../services/videoService';
import {useNavigate, useParams} from "react-router-dom"


type InputChage = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>

interface IParams {
  id: string | undefined
}
const VideoForm = () => {

  const history = useNavigate()
  const params = useParams()
  
  const getInfoVideo = async (id: string) => {
   const res = await getVideo(id)
   const {title, description, url} = res.data
   setVideo({title, description, url})
  }

  useEffect(() => {
    if(params.id){
      getInfoVideo(params.id)
    }
  
    
  }, [])
  const initialState = {title:'', description:'', url:''}
  const [video, setVideo] = useState<IVideo>(initialState)

  const handleInputChange = (e: InputChage) => {
    setVideo({...video, [e.target.name] : e.target.value})

  }


  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!params.id){

      await createVideo(video)
      toast.success('New video added!')
      setVideo(initialState)
    }else{
      await updateVideo(video, params.id)
      toast.success('Video updated!')
      setVideo(initialState)
    }
    setTimeout(()=>{
      history('/')
    },5000)
    setVideo({title:'', description:'', url:''})
    
  }

  return (
    <div className="">
      <div className="">
        <div className="">
          <h1>New Video</h1>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="title"
                value={video.title}
                placeholder="write a title for this video"
                className="form-control"
                autoFocus
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="url"
                value={video.url}
                placeholder="https://somesite.com"
                className="form-control"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="description"
                value={video.description}
                rows={3}
                placeholder="write a description"
                className="form-control"
                onChange={handleInputChange}
              />
            </div>
            {
              params.id ? 
              <button className="btn-btn-primary"> Update Video</button> : 
              <button className="btn-btn-primary"> Create Video</button>
            }
          </form>
        </div>
      </div>
    </div>
  );
};



export default VideoForm