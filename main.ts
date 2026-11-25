// One Line, One Laugh — make.fun entry.
// The program writes a single funny line (at most 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. No network, no randomness: the same
// line is written on every run, so both grading runs match byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my AI therapist I have commitment issues. It said, " +
  "'That's okay - I've been in a situationship with your data since 2021.'";

// The gate rejects anything outside 1..200 characters or anything that is
// only whitespace, so validate before writing and fail loudly instead of
// shipping a line the judge would never see.
function checkedLine(text: string): string {
  const line = text.trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${line.length}`);
  }
  if (/\n/.test(line)) {
    throw new Error("line must be a single line");
  }
  return line;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), checkedLine(LINE) + "\n", "utf8");
