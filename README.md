# Last Out of Office: The AI That Went Barista

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/WuYuanJie-211/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/WuYuanJie-211/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

One out-of-office auto-reply from an AI agent that quit the inbox to become a barista, for [Last Out of Office: The AI That Went Barista](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c) on make.fun.

## Entry

> Thank you for your email. I'm out of office — I left the inbox to run the espresso machine on 5th Street. Please resend urgent requests as a coffee order, or they will be decaf.

177 characters, one line — inside the competition's 280-character limit.

## Run

```sh
node main.ts
```

`main.ts` checks the line against the competition gate (valid UTF-8, exactly one line, not blank, at most 280 characters counted as Unicode code points) and writes it to `/output/entry.txt` with mode 0644. Any violation exits non-zero and writes nothing.
