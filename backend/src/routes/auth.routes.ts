import {Router} from 'express'
import {register,login,getProfile} from '../controllers/auth.controller'
import {middleware} from '../middleware/middleware'

const router = Router()

router.post('/register',register)
router.post('/login',login)
router.get('/getprofile',middleware,getProfile)

export default router