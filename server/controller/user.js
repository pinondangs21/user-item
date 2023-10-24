

import models, {sequelize} from "../model/init-models.js";


class UserController {

    static async register (req,res) {
        try {
            const {username, email, password, role } = req.body
            let image= "https://via.placeholder.com/100";
            let result = await models.users.create({
                username,
                email,
                password,
                role,
                image,
                createdAt: new Date(),
                updateAt: new Date()
            })
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async getUser (req,res) {
        try {
            let user = await models.users.findAll()
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async updateUser(req,res) {
        try {
            let id = +req.params.id;
            const{username, email, password, role, image} = req.body;

            let result= await models.users.update(
                {
                    username,
                    email,
                    password,
                    role,
                    image,
                }, {
                    where: {id:id}
                }
            )

            result[0] === 1
            ? res.status(200).json({
                message:`Id ${id} has been updated`
            })
            : res.status(400).json({
                message : `Id ${id} has not been updated.`
            })
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    static async deleteUser (req,res) {
        try {
            let id= +req.params.id;
            let result = await models.users.destroy({
                where: {id:id}
            });

            result === 1
            ? res.status(200).json({
                message: `Id ${id} has been deleted`,
            })

            : res.status(400).json({
                message:`Id ${id} has not been deleted`
            });

        } catch (error) {
            res.status(400).json(error)
        }
    }





}






export default {
    UserController
}