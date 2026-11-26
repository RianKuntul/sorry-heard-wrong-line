// Sorry, I Heard That Wrong.
// The funniest one-line apology a smart speaker gives after mishearing
// its owner: it heard "turn the volume down" as "burn the house down",
// and delivers the bad news like a guilty housemate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a smart speaker apologising for mishearing its owner.
const ENTRY =
  "Sorry — you said 'turn the volume down,' I heard 'burn the house down.' Nothing is on fire yet, but I wanted you to hear it from me first.";

// The gate: 1 to 140 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the entry text.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
