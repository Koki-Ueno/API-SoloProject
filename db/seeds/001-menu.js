/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('menu').del();
  await knex('menu').insert([
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
  ]);
};
