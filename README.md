# Etch-a-Sketch

Simple browser-based Etch-a-Sketch clone that builds a square grid of tiles you can paint by hovering.

## Features

- Dynamically created grid of square tiles (default 16x16).
- Hovering a tile sets a random RGB background color.
- Resize pad via the "Change pad size" button (prompts for 1–100).
- Minimal CSS layout with normalize.css to improve cross-browser consistency.

## Files

- `index.html` — entry point. Loads `normalize.css`, `style.css`, and `javascript.js`.
- `javascript.js` — grid and interaction logic (constants: `MIN_SIZE`, `MAX_SIZE`, `GRID_SIZE`). Creates rows and tiles, attaches `mouseenter` handlers to color tiles and handles resizing.
- `style.css` — layout and visual styles (centers content, styles tiles and button).
- `normalize.css` — normalize baseline styles.

## Development notes

- Grid size default is controlled by `GRID_SIZE` in `javascript.js`.
- Current behavior assigns a new random color on every hover. To implement a simple color, the class `active` should be toggled instead in the event listener.
