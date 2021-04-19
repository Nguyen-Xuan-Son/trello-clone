import { NextApiRequest, NextApiResponse } from "next";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function getMembers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(500).json({ content: "Only Get method support." });
    return;
  }

  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  const member = await db.all("SELECT * FROM Member");
  res.json({ member });
}
