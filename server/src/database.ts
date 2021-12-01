import mysql from 'promise-mysql'

import credentials from './credentials';

const pool = mysql.createPool(credentials.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('[/] - Conected to CtrlGastos_DB...');
    })

export default pool;
    