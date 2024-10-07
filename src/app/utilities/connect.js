import pg from "pg";
let db;

export const connect = () => {
  if (!db) {
    db = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
    });
    return db;
  }
  return db;
};
