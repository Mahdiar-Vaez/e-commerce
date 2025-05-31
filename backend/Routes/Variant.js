import express from 'express'
import { create, getAll, getOne, remove, update } from '../Controllers/VariantCn.js'
import IsAdmin from '../middleware/IsAdmin.js'
const variantRouter=express.Router()
variantRouter.route('/').get(getAll).post(IsAdmin,create)
variantRouter.route('/:id').patch(IsAdmin,update).delete(IsAdmin,remove).get(getOne)
export default variantRouter