module.exports = {
  development: {
    username: 'sa',
    password: '<YourStrong@Passw0rd>',
    database: 'water',
    host: 'localhost',
    dialect: 'mssql',
    port: 1433,
    define: {
      timestamps: true,
      freezeTableName: false,
    },
  },
  production: {
    username: 'sa',
    password: '<YourStrong@Passw0rd>',
    database: 'water',
    host: 'thuymythanhlong.com',
    dialect: 'mssql',
    port: 1433,
    define: {
      timestamps: true,
      freezeTableName: false,
    },
  },
}
