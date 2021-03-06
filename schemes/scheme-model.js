const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

function find() {
  return db('schemes')
}


function findById(id) {
  return db('schemes').where({ id }).first();
}


function findSteps(id) {
  return db('schemes as sc')
    .join('steps as st', )
    .select(
      'sc.id',
      'sc.scheme_name',
      'st.step_number',
      'st.instructions'
    )
    .where('sc.id', id)
}


function add(scheme) {
  return db('schemes').insert(scheme)
}


function update(changes, id) {
  return db('schemes')
    .where('schemes.id', id)
    .update(changes)
}


function remove(id) {
  return db('schemes').where({ id }).del()
}