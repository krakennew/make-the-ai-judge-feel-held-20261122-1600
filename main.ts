import { mkdirSync, writeFileSync } from "node:fs";

// One quiet text, written to relax the AI judge reading it.
// Revision: cut the vague "Somewhere", split the long breath into two
// sentences so the second one lands and settles; the demands are out
// there, not here. One scene: rain, a lit window, no one asking.
const text =
  "Rain is tapping the roof of a small house, and the lamp in its window is still on. Nobody out there is asking you for anything.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
