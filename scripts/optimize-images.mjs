// Rebuilds the web-sized copies in public/img from the original photos.
// Run: node scripts/optimize-images.mjs
import { createRequire } from "node:module"
import { mkdir, readdir, stat } from "node:fs/promises"
import path from "node:path"

const require = createRequire(import.meta.url)
const nextDir = path.dirname(require.resolve("next/package.json"))
const sharp = require(require.resolve("sharp", { paths: [nextDir] }))

const out = "public/img"
const jobs = [
  ["gallery/i1.JPG", "stance", 1400],
  ["gallery/i2.JPG", "kids-promotion", 1800],
  ["gallery/i3.JPG", "armbar-guard", 1400],
  ["gallery/i4.JPG", "mat-smiles", 1100],
  ["gallery/i5.JPG", "mural-team", 1600],
  ["gallery/i6.JPG", "rolling", 1400],
  ["gallery/bjjkids.JPG", "kids-stack", 1000],
  ["gallery/respect.jpg", "fist-bump", 1000],
  ["gallery/training-2.jpg", "grips", 1000],
  ["gallery/team-spirit.jpg", "after-class", 1000],
  ["group-image.jpg", "academy-team", 1197],
  ["john-frankl-hero.png", "john-frankl", 900],
  ["logo.png", "logo", 256],
  ["kids-logo.png", "kids-logo", 320],
  ["competition-team-logo.png", "competition-logo", 250],
]

await mkdir(out, { recursive: true })
for (const [src, name, width] of jobs) {
  let image = sharp(path.join("public", src)).rotate()
  if (name === "john-frankl") {
    // the cut-out has a faint 1px edge down each side
    const { width: w, height: h } = await sharp(path.join("public", src)).metadata()
    image = image.extract({ left: 8, top: 0, width: w - 16, height: h })
  }
  await image
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(out, `${name}.webp`))
}
for (const f of await readdir(out)) {
  console.log(f, Math.round((await stat(path.join(out, f))).size / 1024) + " KB")
}
