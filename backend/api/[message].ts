import { VercelRequest, VercelResponse } from "@vercel/node";
import pgPool from "../util/pgPool";

export default async (req: VercelRequest, res: VercelResponse) => {
  const { message } = req.query;

  try {
    const client = await pgPool.connect();

    const sql = `INSERT INTO messages(message) VALUES ('${message}');`;
    await client.query(sql);
    return res.send({ adding: message });
  } catch (error) {
    console.error(error);
  }
};
