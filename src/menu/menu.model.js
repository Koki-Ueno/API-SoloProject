const knex = require('../knex');
//const { validProps, requiredProps } = require('../util/validation');

//const validateProps = validProps(['id', 'neta', 'price']);

//const validateRequired = requiredProps(['neta', 'price']);

const MENU_TABLE = 'menu';

module.exports = {
  MENU_TABLE,

  /**
   * @param {number}
   * @return {Promise<Array>}
   */
  getMenu() {
    return knex
      .select({
        id: 'id',
        neta: 'neta',
        price: 'price',
      })
      .from(MENU_TABLE)
      .orderBy('id');
  },

  /**
   * @param {Object} newMenu
   * @return {Promise<number>}
   */
  addMenu(newMenu) {
    return knex.insert(newMenu).into(MENU_TABLE);
  },

  /**
   * @param {Object} changeMenu
   * @return {Promise<number>}
   */
  changeMenu(changeMenu) {
    const { id, neta, price } = changeMenu[0];
    return knex(MENU_TABLE).where({ id }).update({ neta, price });
  },

  /**
   * @param {Object} deleteMenuId
   * @return {Promise<number>}
   */
  deleteMenu(deleteMenuId) {
    const { id } = deleteMenuId[0];
    return knex(MENU_TABLE).where({ id }).del();
  },
};
