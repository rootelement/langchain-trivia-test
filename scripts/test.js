import { client } from "../db.js";

const result = await client.getCollections();
console.log("List of collections: ", result);
