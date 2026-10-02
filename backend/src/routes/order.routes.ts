import {Router} from 'express'
import {makeOrder,getOrders} from '../controllers/order.controller'
import {middleware} from '../middleware/middleware'

const router=Router()

router.post('/',middleware,makeOrder)
router.get('/master',middleware,getOrders)

export default router