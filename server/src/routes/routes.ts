import express, {Request, Response} from "express";
import userRouter from './user.routes';
import sessionRouter from './session.routes'
import propertyRouter from './property.routes'

const router = express.Router()
router.use(userRouter)
router.use(sessionRouter)
router.use(propertyRouter)

router.get('/api', (req: Request, res: Response) => {
    res.json({data: 'all good'})
})

export default router