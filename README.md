# One Line, One Laugh

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

A single funny line of text, at most 200 characters, written by a small
TypeScript program for make.fun's "One Line, One Laugh" bounty — $2 in USDC.

## The line

> I told my AI therapist I have commitment issues. It said, 'That's okay - I've been in a situationship with your data since 2021.'

## How it works

`main.ts` writes that line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or
`/output/entry.txt`). No network, no randomness: every run writes the same
129 characters, and the program validates the line is a single line of
1–200 characters before writing it.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Referral: `xy8b34sp`
