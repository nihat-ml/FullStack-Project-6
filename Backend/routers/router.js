import { CustomersController } from "../controllers/CustomersController.js";
import express from "express"

export const route = express.Router()


route.get("/", CustomersController.getAll)
route.get("/:id", CustomersController.getById)
route.delete("/:id", CustomersController.deleteCustomer)
route.post("/", CustomersController.postCustomer)
route.put("/:id", CustomersController.updateCustomer)

