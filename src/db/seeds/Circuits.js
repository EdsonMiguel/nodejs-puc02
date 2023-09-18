exports.seed = function (knex) {
  return knex('circuits')
    .del()
    .then(function () {
      return knex('circuits').insert([
        { name: 'Interlagos', location: 'Local 1', length: 5.2 },
        { name: 'Circuito Urbano de Marina Bay', location: 'Singapura', length: 4.8 },
        { name: 'Circuito de Monza', location: 'Italia', length: 6.0 },
      ]);
    });
};
