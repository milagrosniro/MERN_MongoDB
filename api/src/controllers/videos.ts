import {RequestHandler} from 'express'
import Video from '../routes/video'

export const createVideo : RequestHandler = async (req,res) => {
   const videoFound = await Video.find({url: req.body.url})

   if(videoFound.length > 0){
    return res.status(301).json({message: 'The url already exits'})
   }
    const videoToCreate = new Video(req.body)
   const savedVideo = await videoToCreate.save()
    
    res.json(savedVideo)
}

export const getVideos : RequestHandler = async (req,res) => {
    try{
        const videos = await Video.find()
        res.json(videos)
    }catch(err){
        res.json(err)
    }
   
}

export const getVideo : RequestHandler = async (req,res) => {
    const id = req.params.id
    
    const videoFound = await Video.findById(id)

    if(videoFound === undefined){
       return  res.status(204).json()
    }
   return res.json(videoFound)
}

export const deleteVideo : RequestHandler = async (req,res) => {
    const id = req.params.id
    
    const videoDeleted = await Video.findByIdAndDelete(id)
    if(videoDeleted === undefined){
       return  res.status(204).json()
    }
   return res.json(videoDeleted)
}

export const updateVideo : RequestHandler = async (req,res) => {
    const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true}) 
    if(videoUpdated === undefined){
        return  res.status(204).json()
     }
    res.json(videoUpdated)
}