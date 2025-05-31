import express from 'express'
import { create, getAll, getOne, remove, update } from '../Controllers/CategoryCn.js'
import IsAdmin from '../middleware/IsAdmin.js'
const categoryRouter=express.Router()
categoryRouter.route('/').get(getAll).post(IsAdmin,create)
categoryRouter.route('/:id').patch(update).delete(IsAdmin,remove).get(getOne)
export default categoryRouter