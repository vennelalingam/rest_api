import express from "express";
import { createUser } from '../functions/users.js'
import { getUsers } from "../functions/users.js";
import { getUserById } from "../functions/users.js";
import { deleteUser } from "../functions/users.js";
import { updateUser } from "../functions/users.js";


const router = express.Router();

//all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;