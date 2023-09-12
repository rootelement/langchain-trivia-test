import fs from "fs";
import csv from "csv-parser";

const dataFile = "./data/questions.csv";

async function readCSVFile(filePath) {
  const results = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

const data = await readCSVFile(dataFile);

console.log(data);
