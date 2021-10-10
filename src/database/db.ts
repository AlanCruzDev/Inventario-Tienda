import mysql from 'mysql';

export const mysqlConnection = mysql.createPool({
    host: 'localhost',
    user: process.env.acceso,
    password: process.env.contraseña,
    database: process.env.bd,
    dateStrings: true,
    multipleStatements: true
});

mysqlConnection.getConnection((err:Error, connection:mysql.PoolConnection)=>{
    if (err) {
        if (err.name === 'PROTOCOL_CONNECTION_LOST') {
            console.log('DATABASE SE CERRO');
        }
        if (err.name === 'ER_CON_COUNT_ERROR') {
            console.log('DATABASE HAS TO MANY CONECTIONS');
        }
        if (err.name === 'ECONNREFUSED') {
            console.log('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if(connection)connection.release();
    console.log('BD IS CONNECTED');
    return;
});