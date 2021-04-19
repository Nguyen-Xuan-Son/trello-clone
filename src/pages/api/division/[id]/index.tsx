import { NextApiRequest, NextApiResponse } from "next";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function getPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "PUT") {
    await db.run(
      "UPDATE Division SET name=?, code=? where id=?",
      [req.body.name, req.body.code, req.query.id],
      function () {
        console.log(1111);
      }
    );

    console.log("req.body.", req.body);
  }

  const division = await db.get("SELECT * FROM Division WHERE id = ?", [
    req.query.id,
  ]);

  res.json({ division });
}
