import * as fs from "fs";
import * as path from "path";
import { vaisheshikaData } from "./data";

const PUBLIC_DIR = path.join(__dirname, "../public/api");
const CHAPTERS_DIR = path.join(PUBLIC_DIR, "chapters");

// Safely ensure directories exist
if (!fs.existsSync(CHAPTERS_DIR)) {
  fs.mkdirSync(CHAPTERS_DIR, { recursive: true });
}

function buildStaticApi() {
  console.log("🔨 Generating Clean Vaisheshika API...");

  // 1. Generate chapters/index.json (The Menu/Sidebar list)
  const chaptersOverview = vaisheshikaData.map(
    ({ id, chapterNumber, title, description }) => ({
      id,
      chapterNumber,
      title,
      description,
    }),
  );

  fs.writeFileSync(
    path.join(CHAPTERS_DIR, "index.json"),
    JSON.stringify(chaptersOverview, null, 2),
  );

  // 2. Generate flat chapter JSON files (ch-1.json, etc.)
  for (const chapter of vaisheshikaData) {
    fs.writeFileSync(
      path.join(CHAPTERS_DIR, `${chapter.id}.json`),
      JSON.stringify(chapter, null, 2),
    );
  }

  console.log(`✨ Success! Generated files in /public directory.`);
}

buildStaticApi();
