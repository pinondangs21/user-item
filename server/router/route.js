import { Router } from "express";
import user from "../controller/user.js";
import item from "../controller/item.js";


const route=Router()

//User
route.post('/register',user.UserController.register)
route.get('/',user.UserController.getUser)
route.put('/update/:id',user.UserController.updateUser)
route.delete('/delete/:id',user.UserController.deleteUser)

//Item
route.post('/create',item.ItemController.createItem)
route.get('/items',item.ItemController.getItems)
route.put('/updateitem/:id',item.ItemController.updateItems)
route.delete('/deleteitem/:id',item.ItemController.deleteItem)




export default 
    route