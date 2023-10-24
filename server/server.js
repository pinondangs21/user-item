import "dotenv/config"
import express from 'express';
import route from './router/route.js';
import cors from 'cors'

const app = express();
const port = process.env.PORT ||3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({credentials:true}))

app.use(route)
app.listen(port,()=> {
    console.log(`App listening on port ${port}`)
})