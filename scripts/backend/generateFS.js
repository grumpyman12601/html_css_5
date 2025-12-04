const fs = require("fs");
const path = require("path");

function scan(dir) {
  const result = { type: "directory", children: {} };

  for (const item of fs.readdirSync(dir)) {
    if (item === "node_modules" || item === ".git") continue;

    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      result.children[item] = scan(full);
    } else {
      result.children[item] = { type: "file" };
    }
  }

  return result;
}

// Scan the 'public' folder
const fsTree = scan("./public");
fs.writeFileSync("./public/filesystem.json", JSON.stringify(fsTree, null, 2));

console.log("✅ filesystem.json generated successfully!");
