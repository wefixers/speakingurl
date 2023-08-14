# SpeakingURL

A revived SpeakingURL with some modern ESM tech!

## Quick Setup

```bash
# Using pnpm
pnpm i @fixers/speakingurl

# Using yarn
yarn add @fixers/speakingurl

# Using npm
npm install @fixers/speakingurl
```

## Usage

> Check the original documentation: https://github.com/pid/speakingurl

```ts
import { getSlug } from '@fixers/speakingurl'

const slug = getSlug('Schöner Titel läßt grüßen!? Bel été !')
console.log(slug) // Output: schoener-titel-laesst-gruessen-bel-ete

const slug = getSlug('Schöner Titel läßt grüßen!? Bel été !', '*')
console.log(slug) // Output: schoener*titel*laesst*gruessen*bel*ete
```

Create a reusable slug with options:

```ts
import { createSlug } from '@fixers/speakingurl'

const getSlut = createSlug('*')

const slug = getSlug('Schöner Titel läßt grüßen!? Bel été !')
console.log(slug) // Output: schoener*titel*laesst*gruessen*bel*ete
```
