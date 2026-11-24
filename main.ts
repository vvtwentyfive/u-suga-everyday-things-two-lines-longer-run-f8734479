import { mkdirSync, writeFileSync } from "node:fs";

// A queue, explained to a 10-year-old: one analogy (a funnel full of
// marbles), one sentence, then one honest sentence about what the
// analogy maps and what it leaves out. Deterministic: no network,
// no randomness, no timestamps.
const line1 =
  "A queue is like pouring marbles into a funnel: plenty rattle in at the wide top, but only one can drop out of the narrow neck at a time, in the order they went in.";
const line2 =
  "It maps the one-at-a-time wait and the first-in-first-out order, but it leaves out that people can chat, step out, or get grumpy while waiting, which marbles never do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${line1}\n${line2}\n`, "utf8");
