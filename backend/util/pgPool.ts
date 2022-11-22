import { Pool } from "pg";

const pgPool = new Pool({
  max: 20,
  connectionString: process.env.DATABASE_URL,
  idleTimeoutMillis: 30000,
});

export default pgPool;
