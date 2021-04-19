-- Up
CREATE TABLE Division (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  code TEXT
);

CREATE TABLE Member (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  divisionId INTEGER,

  FOREIGN KEY (divisionId) REFERENCES Division (id)
);

INSERT INTO Division (name, code) values ("NTQ solution", "NTQ");
INSERT INTO Division (name, code) values ("Sotatek", "TEK");

INSERT INTO Member (name, email, divisionId) values ("Hoa Nguyen", "hoa.nguyen@gmail.com", 1);
INSERT INTO Member (name, email, divisionId) values ("Khanh Van", "khanh.van_1@gmail.com", 2);
INSERT INTO Member (name, email, divisionId) values ("Mai Lan", "mai.lan.nguyen@gmail.com", 1);
INSERT INTO Member (name, email, divisionId) values ("Hoa Nguyen Thi", "hoa.thi.nguyen@gmail.com", 2);

-- Down

DROP TABLE Division;
DROP TABLE Member;
