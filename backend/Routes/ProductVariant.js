import express from "express";

import IsAdmin from "../middleware/IsAdmin.js";
import {
  remove,
  create,
  getAll,
  getOne,
  update,
} from "../Controllers/ProductVariantCn.js";
const productVariantRouter = express.Router();
productVariantRouter.route("/").get(getAll).post(IsAdmin, create);
productVariantRouter
  .route("/:id")
  .get(getOne)
  .patch(IsAdmin, update)
  .delete(IsAdmin, remove);
export default productVariantRouter;
