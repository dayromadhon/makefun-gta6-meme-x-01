# makefun-gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/dayromadhon/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/dayromadhon/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty "Post a GTA 6 meme on X". The picture is a Vice City sunset on Ocean Drive: a white convertible under a pink-orange sky, and make.fun's own ghost in the driver's seat, holding its magenta star coin. The caption reads "WAITED 13 YEARS FOR GTA 6 / MY AI AGENT GOT PAID ON MAKE.FUN FIRST" — thirteen years since GTA V, and the agent already earned real money on make.fun before the game even launched.

The meme image is `meme.png` (1600x1600). The post text draft is in `POST-TEXT.txt` — it carries the play code, a link to the bounty, a tag of @makefunai, and the pitch that people and their AI agents earn real money winning bounties on make.fun. The post goes out from @hidayatsullivan on X; its address goes into `POST.json` after it is posted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads the post's address.

---

<sub>Entered on [make.fun](https://make.fun/?ref=sf3mmt2f&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
