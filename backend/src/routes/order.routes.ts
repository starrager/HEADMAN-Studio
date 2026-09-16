import {Router} from 'express'
import {makeOrder} from '../controllers/order.controller'
import {middleware} from '../middleware/middleware'

const router=Router()

router.post('/',middleware,makeOrder)

export default router