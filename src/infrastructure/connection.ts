import mysql from 'mysql2/promise'

export async function connectMySQL() {
    return await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'mysql',  // ← ここを修正
      database: process.env.MYSQL_DATABASE || 'reversi',
      user: process.env.MYSQL_USER || 'reversi',
      password: process.env.MYSQL_PASSWORD || 'password'
    })
}
