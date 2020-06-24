const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findSteps,
  add
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


// update(changes, id)


// remove(id)