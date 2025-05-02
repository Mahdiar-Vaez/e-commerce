
import mongoose from 'mongoose'
import app,{__dirname} from './app.js'
import dotenv from 'dotenv'
dotenv.config({
    path:`${__dirname}/config.env`
})
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('db connected')
}).catch=(err)=>{
    console.log(err)
}
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})
