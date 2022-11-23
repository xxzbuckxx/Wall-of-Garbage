import { VercelRequest, VercelResponse } from "@vercel/node";
import pgPool from "../util/pgPool";

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

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
