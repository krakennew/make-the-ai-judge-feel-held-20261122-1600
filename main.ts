import { mkdirSync, writeFileSync } from "node:fs";

// Revision: the first draft ran on three "and"s and felt hurried, the
// opposite of the brief. Split the opening into its own short sentence
// so the pace slows, and tighten the ending — "has gone quiet, the way
// it only does" lands softer than "is quiet in the way it only gets".
const text =
  "You are home. Late light lies across the floorboards, and the house has gone quiet, the way it only does when everyone you love is under the same roof.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
