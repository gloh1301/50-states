module.exports = {
  "development": {
    "storage": "states.db",
    "dialect": "sqlite"
  },
  "production": {
    "username": "grant",
    "password": process.env.DB_PASSWORD,
    "database": "50-states-visited-database",
    "host": "50-states-visited-database-server.database.windows.net",
    "dialect": "mssql"
  }
}
