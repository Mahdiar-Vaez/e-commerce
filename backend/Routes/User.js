import express from 'express'
import {  getAll, getOne, update } from '../Controllers/UserCn.js'
import IsAdmin from '../middleware/IsAdmin.js'
const userRoute=express.Router()
userRoute.route('/').get(IsAdmin,getAll)
userRoute.route('/:id').patch(update).get(getOne)
export default userRoute