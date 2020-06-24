const db = require('../data/dbConfig.js');

module.exports = {
  find,
}

function find() {
  return db('schemes')
}


// findById(id)


// findSteps(id)


// add(scheme)


// update(changes, id)


// remove(id)