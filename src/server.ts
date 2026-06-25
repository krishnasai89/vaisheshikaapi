import { createServer } from "node:http";
import { fullyCompiledSystem } from "./data";

const PORT = process.env.PORT || 3000;

// Simple, ultra-fast native HTTP router (no extra heavy frameworks needed)
const server = createServer((req, res) => {
  // Set CORS and JSON headers for production frontend apps
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url || "", `http://${req.headers.host}`);
  const path = url.pathname;

  try {
    // Route 1: System Manifest Overview
    if (path === "/" || path === "/api") {
      res.writeHead(200);
      res.end(
        JSON.stringify({
          status: "healthy",
          engine: "Vaiśeṣika Ontological Engine",
          version: "1.0.0",
          founder: fullyCompiledSystem.founder.name,
          available_endpoints: [
            "/api/overview",
            "/api/founder",
            "/api/chapters",
            "/api/chapters/:id",
            "/api/modern-matrix",
            "/api/viewpoints",
          ],
        }),
      );
      return;
    }

    // Route 2: Philosophical Context
    if (path === "/api/overview") {
      res.writeHead(200);
      res.end(JSON.stringify(fullyCompiledSystem.overview));
      return;
    }

    // Route 3: Founder Biography & Reference Links
    if (path === "/api/founder") {
      res.writeHead(200);
      res.end(JSON.stringify(fullyCompiledSystem.founder));
      return;
    }

    // Route 4: All 10 Chapters (Metadata only to save payload space)
    if (path === "/api/chapters") {
      const basicChapters = fullyCompiledSystem.chapters.map((ch) => ({
        chapterNumber: ch.chapterNumber,
        title: ch.title,
        description: ch.description,
        verseCount: ch.verses.length,
      }));
      res.writeHead(200);
      res.end(JSON.stringify(basicChapters));
      return;
    }

    // Route 5: Specific Chapter with full Verse payloads
    if (path.startsWith("/api/chapters/")) {
      const chapterId = parseInt(path.split("/")[3]);
      const chapter = fullyCompiledSystem.chapters.find(
        (ch) => ch.chapterNumber === chapterId,
      );

      if (!chapter) {
        res.writeHead(404);
        res.end(JSON.stringify({ error: `Chapter ${chapterId} not found.` }));
        return;
      }

      res.writeHead(200);
      res.end(JSON.stringify(chapter));
      return;
    }

    // Route 6: OOP / Quantum / AI Matrix mappings
    if (path === "/api/modern-matrix") {
      res.writeHead(200);
      res.end(JSON.stringify(fullyCompiledSystem.modernTechnicalSynthesis));
      return;
    }

    // Route 7: Myth vs Reality Viewpoint Matrix
    if (path === "/api/viewpoints") {
      res.writeHead(200);
      res.end(JSON.stringify(fullyCompiledSystem.globalViewpointMatrix));
      return;
    }

    // Catch-all: 404
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route not found" }));
  } catch (error) {
    res.writeHead(500);
    res.end(
      JSON.stringify({
        error: "Internal Server Error",
        details: (error as Error).message,
      }),
    );
  }
});

server.listen(PORT, () => {
  console.log(`\n🪐 Vaiśeṣika Data API online!`);
  console.log(`📡 Local Stream Address: http://localhost:${PORT}`);
  console.log(`⚡ Dev watch environment active.\n`);
});
