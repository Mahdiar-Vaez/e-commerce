import express from 'express'
import morgan from 'morgan'
import {fileURLToPath} from 'url'
import path from 'path'
import {
    addressRouter,
    orderRouter,
    productRouter,
    variantRouter,
    discountRouter,
    sliderRouter,
    commentRouter,
    cartRouter,
    categoryRouter,
    brandRouter,userRoute,
    productVariantRouter,
  } from './Routes/import.js'
import catchError from './utils/catchError.js'
import HandleERROR from './utils/handleError.js'
import isLogin from './middleware/IsLogin.js'
const __filename=fileURLToPath(import.meta.url)
console.log("🚀 ~ __filename:", __filename)
export  const __dirname=path.dirname(__filename)
console.log("🚀 ~ __dirname:", __dirname)
const app=express()
 app.use(express.json())
app.use(morgan('dev'))

 app.use(express.static('/Public'))
 app.use('/users',userRoute)
 app.use('/address',isLogin, addressRouter)
 app.use('/orders', orderRouter)
 app.use('/products', productRouter)
 app.use('/variants', variantRouter)
 app.use('/discounts', discountRouter)
 app.use('/sliders', sliderRouter)
 app.use('/comments', commentRouter)
 app.use('/cart', cartRouter)
 app.use('/categories', categoryRouter)
 app.use('/brands', brandRouter)
 app.use('/product-variants', productVariantRouter)



app.use((req, res, next) => {
    next(new HandleERROR('Route not found', 404))
  })
  
  app.use(catchError)

 export default app