// Update with your config settings.

module.exports = {
    client: 'postgresql',
    connection: {
      database: 'app_instagram',
      user:     'postgres',
      password: '170600'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
