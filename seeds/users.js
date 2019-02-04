exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "admin1", password: "password", isAdmin: true },
        { id: 2, username: "user1", password: "password", isAdmin: false },
        { id: 3, username: "user2", password: "password", isAdmin: false }
      ]);
    });
};
