import { NextApiRequest, NextApiResponse } from "next";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function getMemberById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  const member = await db.get("SELECT * FROM Member WHERE id = ?", [
    req.query.id,
  ]);

  res.json({ member });
}
