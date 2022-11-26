import { VercelRequest, VercelResponse } from "@vercel/node";
import pgPool from "../util/pgPool";

export default async (_req: VercelRequest, res: VercelResponse) => {
  try {
    const client = await pgPool.connect();

    const sql = "SELECT * FROM messages ORDER BY created_at DESC";
    const { rows } = await client.query(sql);
    const todos = rows;

    client.release();

    res.send(todos);
  } catch (error) {
    res.status(400).send(error);
  }
};
