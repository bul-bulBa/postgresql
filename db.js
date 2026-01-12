import { Pool } from "pg";

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'root',
    database: 'myfirstsqldb',
    max: 10,
    idleTimeoutMillis: 30000,
})



export default pool