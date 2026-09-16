import express from 'express'
import cors from 'cors'

const app=express()
const PORT=process.env.PORT||5178

app.use(cors())
app.use(express.json())

import authRoutes from './routes/auth.routes'
import servicesRoutes from './routes/services.routes'
import mastersRoutes from './routes/masters.routes'
import orderRoutes from './routes/order.routes'

app.use('/auth',authRoutes)
app.use('/services',servicesRoutes)
app.use('/masters',mastersRoutes)
app.use('/order',orderRoutes)

app.listen(PORT,()=>{
    console.log(`THE SERVER IS RUNNING ON http://localhost:${PORT}`)
})