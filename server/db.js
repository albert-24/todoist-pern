import { Pool } from "pg";

const pool = new Pool({
    user: "albert",
    password: "albert123",
    host: "localhost",
    port: 5432,
    database: "todoist-pern",
});

export default pool;