import { fullyCompiledSystem } from "../src/data";

function runProductionValidation() {
  console.log("🚀 Initializing Vaiśeṣika Engine validation pipeline...\n");
  let errorCount = 0;
  let warningCount = 0;
  const verifiedIds = new Set<string>();
  const errorLog: string[] = []; // 👈 Stores errors for a clean summary at the bottom

  // 1. Verify Global Metadata Layer
  if (!fullyCompiledSystem.overview.name || !fullyCompiledSystem.founder.name) {
    const err =
      "❌ Schema Error: Global System overview or founder files are empty.";
    errorLog.push(err);
    errorCount++;
  }

  // 2. Validate Chapters and Verses
  fullyCompiledSystem.chapters.forEach((chapter) => {
    if (chapter.verses.length === 0) {
      const err = `❌ Logic Error: Chapter ${chapter.chapterNumber} has an empty verses array.`;
      errorLog.push(err);
      errorCount++;
    }

    chapter.verses.forEach((verse) => {
      // Check for structural ID duplicates
      if (verifiedIds.has(verse.id)) {
        const err = `❌ Duplicate Key Error in Ch ${chapter.chapterNumber}: ID "${verse.id}" on verse ${verse.verseNumber} is used multiple times.`;
        errorLog.push(err);
        errorCount++;
      }
      verifiedIds.add(verse.id);

      // Verify numbering formats match the text standard
      const splitNumber = verse.verseNumber.split(".");
      if (
        splitNumber.length !== 3 ||
        parseInt(splitNumber[0]) !== chapter.chapterNumber
      ) {
        warningCount++;
      }

      // Assert mandatory text properties exist
      if (!verse.sanskrit || !verse.transliteration || !verse.translation) {
        const err = `❌ Text Schema Error in Ch ${chapter.chapterNumber}: Missing core fields (Sanskrit/Transliteration/Translation) on verse ${verse.verseNumber}`;
        errorLog.push(err);
        errorCount++;
      }

      // Assert high-contrast viewpoints are fully fleshed out
      if (
        !verse.viewpoint ||
        !verse.viewpoint.how_people_think ||
        !verse.viewpoint.the_reality_is
      ) {
        const err = `❌ Viewpoint Error in Ch ${chapter.chapterNumber}: Missing or incomplete viewpoint block on verse ${verse.verseNumber}`;
        errorLog.push(err);
        errorCount++;
      }
    });
  });

  // 3. Output Final Execution Summary
  console.log("==================================================");
  console.log(
    `🏁 Validation Suite Complete: ${verifiedIds.size} total sūtras audited.`,
  );
  console.log(`❌ Errors Flagged: ${errorCount}`);
  console.log(`⚠️ Warnings Issued: ${warningCount}`);
  console.log("==================================================");

  // 👈 Prints the exact errors cleanly at the absolute bottom
  if (errorLog.length > 0) {
    console.log("\n🚨 DETECTED ERRORS SUMMARY:");
    errorLog.forEach((log) => console.error("   " + log));
    console.log(
      "\n🛑 Build Stopped: Fix schema validation errors before running production bundle.\n",
    );
    process.exit(1);
  } else {
    console.log(
      "\n🎉 Clean Compile! Your data assets are 100% compliant and production-ready.\n",
    );
    process.exit(0);
  }
}

runProductionValidation();
