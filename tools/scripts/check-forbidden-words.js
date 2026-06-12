import fs from "fs";
import path from "path";
import forbiddenWords from "../static/forbidden-words.json";


const forbidden = forbiddenWords.forbiddenWords;
const docsDir = "./src/content/docs";

let hasErrors = false;

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  forbidden.forEach(word => {
    if (content.toLowerCase().includes(word)) {
      console.log(`❌ Forbidden word "${word}" found in: ${filePath}`);
      hasErrors = true;
    }
  });
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith(".md")) {
      scanFile(fullPath);
    }
  });
}

walk(docsDir);

if (hasErrors) {
  process.exit(1);
} else {
  console.log("✅ No forbidden words found");
}
