import {Router} from 'express'
import { getVideos, createVideo, getVideo, deleteVideo, updateVideo } from '../controllers/videos';
const router = Router();

router.get('/videos', getVideos)
router.get('/videos/:id', getVideo)

router.delete('/videos/:id', deleteVideo)

router.post('/videos', createVideo)

router.put('/videos/:id', updateVideo )

export default router