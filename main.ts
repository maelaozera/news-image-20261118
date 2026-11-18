// news-image-20261118 entry (Node 22, standard library only).
//
// The entry image lives beside this program as entry.png. The program copies
// it to the grader's output directory, byte for byte, with no network access
// and no other input, so every run writes the same bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
// A plain file copy: no re-encoding and no resizing, so the bytes the judge
// sees are exactly the bytes committed in this repository.
copyFileSync(join(here, 'entry.png'), join(outputDir, 'entry.png'));
