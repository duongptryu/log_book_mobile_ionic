import { RentInfo } from "./models/models";
import { openDB } from "idb";

const DATABASE_NAME = "logBook";
const TABLE = "rent_info";

InitDB().then(() => {
  console.log("Connected to " + DATABASE_NAME + " database");
});

async function InitDB() {
  const db = await openDB(DATABASE_NAME, 1, {
    upgrade(db) {
      const TABLE = "rent_info";
      const store = db.createObjectStore(TABLE, {
        keyPath: "id",
        autoIncrement: true,
      });
    },
  });
}

export async function InsertRentInfo(rentInfo: RentInfo) {
  const db = await openDB(DATABASE_NAME, 1);
  try {
    await db.transaction(TABLE, "readwrite").objectStore(TABLE).put(rentInfo);
  } catch (err) {
    console.log(err);
  }
}
