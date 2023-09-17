exports.up = function (knex) {
  return knex.schema.createTable('circuits', function (table) {
    table.increments('id').primary(); 
    table.string('name').notNullable(); 
    table.string('location'); 
    table.decimal('length', 6, 2); 
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('circuits'); 
};