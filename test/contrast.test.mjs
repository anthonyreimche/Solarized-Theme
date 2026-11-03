import assert from "node:assert/strict";
import { test } from "node:test";
import { activate } from "../dist/index.js";

const themes = [];
activate({ registerTheme: (theme) => themes.push(theme) });

const channel = (v) => {
  const c = v / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex) => {
  const n = Number.parseInt(hex.slice(1), 16);
  return 0.2126 * channel(n >> 16) + 0.7152 * channel((n >> 8) & 255) + 0.0722 * channel(n & 255);
};

const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

for (const theme of themes) {
  const { vars } = theme;

  test(`${theme.name}: on-accent text is legible on the slider fill`, () => {
    assert.ok(vars["--color-on-accent"], "theme sets --color-on-accent");
    const ratio = contrast(vars["--color-on-accent"], vars["--color-slider-fill"]);
    assert.ok(ratio >= 4.5, `on-accent vs slider-fill is ${ratio.toFixed(2)}:1`);
  });

  test(`${theme.name}: on-accent text is legible on the accent`, () => {
    assert.ok(vars["--color-on-accent"], "theme sets --color-on-accent");
    const ratio = contrast(vars["--color-on-accent"], vars["--color-accent"]);
    assert.ok(ratio >= 4.5, `on-accent vs accent is ${ratio.toFixed(2)}:1`);
  });

  test(`${theme.name}: secondary text is legible on the panel surfaces`, () => {
    for (const surface of ["--color-surface-0", "--color-surface-1"]) {
      const ratio = contrast(vars["--color-text-secondary"], vars[surface]);
      assert.ok(ratio >= 4.5, `text-secondary vs ${surface} is ${ratio.toFixed(2)}:1`);
    }
  });
}
