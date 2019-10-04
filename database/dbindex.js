const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
} = process.env;

// create new pool with user's info from .env
const pool = new Pool({
  user: DB_USER,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
  host: DB_HOST,
});

// connection using created pool
pool.connect();


const insertUser = () => new Promise((resolve, reject) => {
  pool.query(`INSERT INTO users(firstName, lastName, email) VALUES('dan', 'dan', 1)`, (error, results) => {
    if (error) {
      console.log(error);
      return reject(error);
    }
    console.log(results);
    return resolve(results);
  });
});


module.exports = {
  insertUser,
};

//ALL THIS CRAP IS CARIN'S NOTES, WHICH SHE WILL DELETE LATER. PLEASE DON"T DELETE RIGHT NOW.
// CONNECTIONSTRING = 'postgres://postgres:123@localhost:5432/floodbud';


// // const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
// const pool = new Pool({
//   connectionString: connectionString,
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
// })


// // const pool = new Pool({
// //   user: DB_USER,
// //   host: DB_HOST,
// //   database: DB_DATABASE,
// //   password: DB_PASSWORD,
// //   port: DB_PORT,
// //   //
// // });
// // const connectionString = 'postgresql://DB_USER:DB_PASSWORD@DB_HOST}:DB_PORT}/DB_DATABASE';

// // const pool = new Pool(connectionString);
// // set up the database connection
// /* you will need a .env file with the appropriate values. The format for ours was:
// DB_USER=******
// DB_PASSWORD=*****
// DB_HOST=*******
// DB_PORT=******
// DB_DATABASE=******
// */

// pool.on('connect', () => {
//     console.log('connected to the db');
// });


// //THESE ARE JUST NOTES FOR CARIN, to look back at as potential for deployment
// //DELETE later, after you figure this shit out, carin
// // const isProduction = process.env.NODE_ENV === 'production'

// // const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// // const pool = new Pool({
// //   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
// //   ssl: isProduction,
// // })
// //END carin's shit


// //NOTES from node-postgres
// // const { Pool } = require('pg')
// // const pool = new Pool()
// // pool
// //   .query('SELECT * FROM users WHERE id = $1', [1])
// //   .then(res => console.log('user:', res.rows[0]))
// //   .catch(e =>
// //     setImmediate(() => {
// //       throw e
// //     })
// //   )


// //MORE NOTES FOR CARIN, from .env possibilities:
// // DATABASE_URL=postgres://postgres@127.0.0.1:5432/floodbud

// // set up the database connection
// /* you will need a .env file with the appropriate values. The format for ours was:
// HOST=heirbloom.****************.com
// DB_PORT=3306
// USER_NAME=******
// USER_PASSWORD=********
// DATABASE=heirbloom
// FOOD2FORKKEY=*************************
// */