// Solarized Light + Dark themes for Safelight.
// Plain ESM, no build step — registers two ThemeContributions via the
// extension API. Palette: https://ethanschoonover.com/solarized/

export function activate(api) {
  api.registerTheme({
    id: "theme-solarized.dark",
    name: "Solarized Dark",
    colorScheme: "dark",
    vars: {
      "--color-surface-0": "#00212b", // below base03 for window chrome depth
      "--color-surface-1": "#002b36", // base03
      "--color-surface-2": "#073642", // base02
      "--color-surface-3": "#0e4250", // base02 → base01 step
      "--color-surface-4": "#174f5d",
      "--color-border": "#1c5263",
      "--color-border-subtle": "#0a3c49",
      "--color-text-primary": "#93a1a1", // base1
      "--color-text-secondary": "#657b83", // base00
      "--color-text-muted": "#4a626c",
      "--color-accent": "#268bd2", // blue
      "--color-accent-hover": "#4ca2dd",
      "--color-slider-fill": "#586e75", // base01
    },
  });

  api.registerTheme({
    id: "theme-solarized.light",
    name: "Solarized Light",
    colorScheme: "light",
    vars: {
      "--color-surface-0": "#fdf6e3", // base3
      "--color-surface-1": "#f6efdc",
      "--color-surface-2": "#eee8d5", // base2
      "--color-surface-3": "#e3dcc5",
      "--color-surface-4": "#d6cfb6",
      "--color-border": "#c3bca5",
      "--color-border-subtle": "#e6dfca",
      "--color-text-primary": "#073642", // base02
      "--color-text-secondary": "#657b83", // base00
      "--color-text-muted": "#93a1a1", // base1
      "--color-accent": "#268bd2", // blue
      "--color-accent-hover": "#1b76b8",
      "--color-slider-fill": "#839496", // base0
    },
  });
}

export function deactivate() {
  // Theme contributions are swept automatically on uninstall.
}
