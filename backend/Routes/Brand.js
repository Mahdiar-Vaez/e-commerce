import express from 'express'
import { create, getAll, getOne, remove, update } from '../Controllers/BrandCn.js'
import IsAdmin from '../middleware/IsAdmin.js'
const brandRouter=express.Router()
brandRouter.route('/').get(getAll).post(IsAdmin,create)
brandRouter.route('/:id').patch(update).delete(IsAdmin,remove).get(getOne)
export default brandRouter