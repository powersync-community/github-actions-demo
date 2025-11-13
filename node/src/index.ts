import 'dotenv/config'
import {
  column,
  Schema,
  Table,
  PowerSyncDatabase,
} from "@powersync/node";

export class Connector {
  async fetchCredentials() {
    const endpoint = process.env.POWERSYNC_URL;
    if (!endpoint) {
      return null;
    }
    const token = await fetch(`${process.env.BACKEND_URL}/api/auth/token`)
      .then((response) => response.json())
      .then((data) => data.token as string);
    return { endpoint, token };
  }
  async uploadData(database: any) { }
};


const schema = new Schema({
  lists: new Table({
    name: column.text,
    created_at: column.text,
    owner_id: column.text,
  }),
  todos: new Table({
    description: column.text,
    list_id: column.text,
    completed: column.integer,
  }),
});

const powerSync = new PowerSyncDatabase({
  schema,
  database: { dbFilename: "example.sqlite" },
});

await powerSync.connect(new Connector());
await powerSync.init();
await powerSync.waitForFirstSync();


const lists = await powerSync.getAll(`SELECT * FROM lists`);
console.log("lists: ", lists);

const todos = await powerSync.getAll(`SELECT * FROM todos`);
console.log("todos: ", todos);

await powerSync.disconnect();
console.log("Disconnected and cleared the database.");

process.exit(0);
