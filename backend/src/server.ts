import express from 'express'
import cors from 'cors'

const app=express()
const PORT=process.env.PORT||5178

app.use(cors())
app.use(express.json())

import authRoutes from './routes/auth.routes'

app.use('/auth',authRoutes)

app.listen(PORT,()=>{
    console.log(`THE SERVER IS RUNNING ON http://localhost:${PORT}`)
})