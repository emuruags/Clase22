import knex from 'knex'

export const mySqlDatabase = knex({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
     password : 'admin',
    database : 'coder-house-desa'
  }
});


export const sqlLite3Database = knex({
  client: 'sqlite3',
  connection: {
    filename: "./db/messages.sqlite"
  }
});

export default { mySqlDatabase, sqlLite3Database };