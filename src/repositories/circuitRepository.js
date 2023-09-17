const knex = require('knex');
const db = knex(require('./knexfile').development);

async function  create(circuit) {
  return db(this.tableName).insert(circuit).returning('*');
}

async function findById(id) {
  return db(this.tableName).where({ id }).first();
}

async function findAll() {
  return db(this.tableName);
}

async function update(id, circuit) {
  return db(this.tableName).where({ id }).update(circuit).returning('*');
}

async function remove(id) {
  return db(this.tableName).where({ id }).delete();
}


module.exports =  {
  create,
  findById,
  findAll, 
  update, 
  remove
} 
