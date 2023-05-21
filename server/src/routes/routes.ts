import express, {Request, Response} from "express";
import userRouter from './user.routes';
import sessionRouter from './session.routes'

const router = express.Router()
router.use(userRouter)
router.use(sessionRouter)

router.get('/api', (req: Request, res: Response) => {
    res.json({data: 'all good'})
})

export default router