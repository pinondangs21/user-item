import models, { sequelize } from "../model/init-models.js";

class ItemController {
  static async createItem(req, res) {
    try {
      const { name, category, price, stock, user_id } = req.body;
      let image = "https://via.placeholder.com/100";

      let result = await models.items.create({
        name,
        category,
        price,
        stock,
        image,
        user_id,
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  static async getItems(req, res) {
    try {
      let items = await models.items.findAll();
      res.status(200).json(items);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  static async updateItems(req, res) {
    try {
      let id = +req.params.id
      const { name, categories, price, stock, image, user_id } = req.body

      let result = await models.items.update({
        name,
        categories,
        price,
        stock,
        image,
        user_id,
      },{
        where:{id}
      });

      result[0] === 1 ?
         res.status(200).json({
            message: `Id Item ${id} has been updated`,
          }) :
         res.status(400).json({
            message: `Id Item ${id} has not been updated`,
          });
    } catch (error) {
      res.send(error.message);
    }
  }

  static async deleteItem (req,res) {
    try {
      let id = +req.params.id;
      let result = await models.items.destroy ({
        where: {id}
      })

      result === 1
      ? res.status(200).json({ 
          message:`Id Item ${id} has been deleted`
      })
      : res.status(400).json({
          message:`Id Item ${id} has not been deleted`
      })
    } catch (error) {
      res.status(400).json(error)
    }
  }


}

export default {
  ItemController,
};
