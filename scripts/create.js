import config from "../config.js";
import { client } from "../db.js";

try {
  const r = await client.createCollection(config.QDRANT.COLLECTION_NAME, {
    vectors: { size: 300, distance: "Cosine" },
  });
  console.log("Creation Complete", r);
} catch (e) {
  console.error(e.data?.status?.error || e);
}
