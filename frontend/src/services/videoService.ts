import axios from "axios"
import { IVideo } from '../interfaces/videos';


const api = 'http://localhost:4000'

export const getAllVideos = async () =>{
   return await axios.get<IVideo[]>(`${api}/videos`)   
  }

  export const createVideo = async (video: IVideo) =>{
   return await axios.post(`${api}/videos`, video)   
  }

  export const getVideo = async (id:string) =>{
   return await axios.get<IVideo>(`${api}/videos/${id}`)   
  }

  export const updateVideo = async (video: IVideo, id: string) => {
   
   return await axios.put(`${api}/videos/${id}`, video)   
  }

  export const deleteVideo = async (id: string) =>{
   
   return await axios.delete(`${api}/videos/${id}`)   
  }