exports.seed = function (knex) {
  return knex('circuits')
    .del()
    .then(function () {
      return knex('circuits').insert([
        { name: 'Circuito 1', location: 'Local 1', length: 5.2 },
        { name: 'Circuito 2', location: 'Local 2', length: 4.8 },
        { name: 'Circuito 3', location: 'Local 3', length: 6.0 },
      ]);
    });
};
