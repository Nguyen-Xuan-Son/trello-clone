import { NextApiRequest, NextApiResponse } from "next";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function getAllPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  const members = await db.all("SELECT * FROM Member WHERE divisionId = ?", [
    req.query.id,
  ]);
  res.json({ members });
}
