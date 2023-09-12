import { QdrantClient } from "@qdrant/js-client-rest";
import config from "./config.js";

const client = new QdrantClient({
  url: config.QDRANT.URL,
  apiKey: config.QDRANT.API_KEY,
});

export { client };
