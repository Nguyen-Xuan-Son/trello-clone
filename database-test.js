const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

async function setup() {
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  const Members = await db.all("SELECT * FROM Member");
  console.log("data = Members ==> ", Members);

  const Divisions = await db.all("SELECT * FROM Division");
  console.log("data = Divisions ==> ", Divisions);

  await db.migrate({ force: "last" });
}

setup();
