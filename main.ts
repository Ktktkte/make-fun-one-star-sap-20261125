import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "One star: moved me to a 'better spot' with no light, waters me on a schedule I never agreed to, then acts surprised when I drop leaves like a resignation letter. Would not photosynthesize here again.";

// Gate guard: entry must be a single line of 1-279 characters.
if (line.length < 1 || line.length > 279 || line.includes("\n")) {
  throw new Error(`entry line must be 1-279 chars, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
