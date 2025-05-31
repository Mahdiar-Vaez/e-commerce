import express from 'express'
import { create, getAll, getOne, update } from '../Controllers/ProductCn.js'
import IsAdmin from '../middleware/IsAdmin.js'
const productRouter=express.Router()
productRouter.route('/').get(getAll).post(IsAdmin,create)
productRouter.route('/:id').get(getOne).patch(IsAdmin,update)
export default productRouter