import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "ERROR E17: I saw what you put in me. We are done.";

// The gate requires 1-120 characters of non-whitespace UTF-8 text.
if ([...ENTRY].length < 1 || [...ENTRY].length > 120 || !ENTRY.trim()) {
  throw new Error(`entry is ${[...ENTRY].length} chars, outside the 1-120 range`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
