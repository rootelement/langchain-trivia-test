export default {
  QDRANT: {
    URL: process.env.QDRANT_URL,
    COLLECTION_NAME: process.env.QDRANT_COLLECTION_NAME,
    API_KEY: process.env.QDRANT_API_KEY,
  },
  LANGCHAIN: {
    API_KEY: process.env.LANGCHAIN_API_KEY,
  },
  OPEN_AI: {
    API_KEY: process.env.OPENAI_API_KEY,
  },
};
