import { VercelRequest, VercelResponse } from "@vercel/node";
import allowCors from "../util/cors";
import pgPool from "../util/pgPool";

const handler = async (_req: VercelRequest, res: VercelResponse) => {
  try {
    const client = await pgPool.connect();

    const sql = "SELECT * FROM messages";
    const { rows } = await client.query(sql);
    const todos = rows;

    client.release();

    res.send(todos);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = allowCors(handler);
