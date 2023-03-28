const menuModel = require('./menu.model');

module.exports = {
  async get(req, res) {
    const menu = await menuModel.getMenu();
    res.json(menu);
  },

  async post(req, res) {
    const newMenu = req.body;
    await menuModel.addMenu(newMenu);
    res.sendStatus(201);
  },

  async patch(req, res) {
    const changeMenu = req.body;
    await menuModel.changeMenu(changeMenu);
    res.sendStatus(201);
  },

  async delete(req, res) {
    const deleteMenuId = req.body;
    await menuModel.deleteMenu(deleteMenuId);
    res.sendStatus(201);
  },
};
