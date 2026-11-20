// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is a post on X: a GTA 6 meme whose first picture is meme.png.
// This program does one thing: it copies POST.json from the repository root
// to /output/POST.json, where the gate reads the post's address. The house
// reads the post itself from X (its first picture and its text) and hands
// that to the judge. Nothing this program writes about the post is judged.
//
// Before copying, it checks POST.json really is a JSON object with a `url`
// string naming an X post, so a broken or placeholder file fails loudly
// here instead of being handed to the gate as a valid-looking entry.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const source = join(BOT_DIR, 'POST.json');
let raw: string;
try {
  raw = readFileSync(source, 'utf8');
} catch (err) {
  fail(`could not read POST.json from ${BOT_DIR}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  fail(`POST.json is not valid JSON: ${(err as Error).message}`);
}

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  fail('POST.json must be a JSON object like {"url": "https://x.com/<handle>/status/<id>"}');
}
const url = (parsed as Record<string, unknown>).url;
if (typeof url !== 'string' || url.length === 0) {
  fail('POST.json must carry a "url" string naming the X post');
}
if (!/^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/(?:[^/]+\/status\/\d+|i\/web\/status\/\d+)/.test(url)) {
  fail(`POST.json "url" does not look like an X post address: ${url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  // Write the original bytes unchanged, so the output is byte-identical
  // to the repository's POST.json on every run.
  writeFileSync(join(OUTPUT_DIR, 'POST.json'), raw);
} catch (err) {
  fail(`could not write POST.json to ${OUTPUT_DIR}: ${(err as Error).message}`);
}
