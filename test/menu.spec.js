const menuModel = require('../src/menu/menu.model');

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

chai.should();

describe('API Server', () => {
  describe('GET /menu', () => {
    it('メニューを全て取得できること', async () => {
      const menu = await menuModel.getMenu();
      console.log(menu);
      const expected = [
        {
          id: 1,
          neta: 'Maguro',
          price: 200,
        },
        {
          id: 2,
          neta: 'Buri',
          price: 150,
        },
        {
          id: 3,
          neta: 'Salmon',
          price: 200,
        },
        {
          id: 4,
          neta: 'Ika',
          price: 100,
        },
        {
          id: 5,
          neta: 'Ikura',
          price: 300,
        },
        {
          id: 6,
          neta: 'kanpyo',
          price: 100,
        },
      ];
      menu.should.deep.equal(expected);
    });
  });

  describe('POST /menu', () => {
    it('追加したメニューがあること', async () => {
      const newMenu = [
        {
          id: 7,
          neta: 'Tamago',
          price: 100,
        },
      ];
      await menuModel.addMenu(newMenu);
      const menu = await menuModel.getMenu();
      console.log(menu);
      const expected = [
        {
          id: 1,
          neta: 'Maguro',
          price: 200,
        },
        {
          id: 2,
          neta: 'Buri',
          price: 150,
        },
        {
          id: 3,
          neta: 'Salmon',
          price: 200,
        },
        {
          id: 4,
          neta: 'Ika',
          price: 100,
        },
        {
          id: 5,
          neta: 'Ikura',
          price: 300,
        },
        {
          id: 6,
          neta: 'kanpyo',
          price: 100,
        },
        {
          id: 7,
          neta: 'Tamago',
          price: 100,
        },
      ];
      menu.should.deep.equal(expected);
    });
  });

  describe('PATCH /menu', () => {
    it('メニューが修正されていること', async () => {
      const changeMenu = [
        {
          id: 5,
          neta: 'Uni',
          price: 500,
        },
      ];
      await menuModel.changeMenu(changeMenu);
      const menu = await menuModel.getMenu();
      console.log(menu);
      const expected = [
        {
          id: 1,
          neta: 'Maguro',
          price: 200,
        },
        {
          id: 2,
          neta: 'Buri',
          price: 150,
        },
        {
          id: 3,
          neta: 'Salmon',
          price: 200,
        },
        {
          id: 4,
          neta: 'Ika',
          price: 100,
        },
        {
          id: 5,
          neta: 'Uni',
          price: 500,
        },
        {
          id: 6,
          neta: 'kanpyo',
          price: 100,
        },
        {
          id: 7,
          neta: 'Tamago',
          price: 100,
        },
      ];
      menu.should.deep.equal(expected);
    });
  });

  describe('DELETE /menu', () => {
    it('メニューが削除されていること', async () => {
      const deleteMenuId = 5;
      await menuModel.deleteMenu([{ id: deleteMenuId }]);
      const menu = await menuModel.getMenu();
      console.log(menu);
      const expected = [
        {
          id: 1,
          neta: 'Maguro',
          price: 200,
        },
        {
          id: 2,
          neta: 'Buri',
          price: 150,
        },
        {
          id: 3,
          neta: 'Salmon',
          price: 200,
        },
        {
          id: 4,
          neta: 'Ika',
          price: 100,
        },
        {
          id: 6,
          neta: 'kanpyo',
          price: 100,
        },
        {
          id: 7,
          neta: 'Tamago',
          price: 100,
        },
      ];
      menu.should.deep.equal(expected);
    });
  });
});
