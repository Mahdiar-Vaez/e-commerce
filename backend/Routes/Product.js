import express from 'express'
const productRouter=express.Router()
productRouter.get('/', (req, res) => {
    res.json({ message: 'Products route is working!' })
  })
export default productRouter