import * as fs from "fs/promises";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJson = await fs.readFile(resolve(__dirname, "../copy.json"), {
  encoding: "utf-8"
});

await fs.writeFile(
  resolve(__dirname, "../dist/cjs/package.json"),
  packageJson,
  {
    encoding: "utf-8"
  }
);
