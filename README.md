# HA Barometer Card

HA Barometer Card is a Home Assistant Lovelace custom card that blends the classic look of an analog barometer with a modern interface. The initial release focuses on the core foundation so that we can iteratively build new features together.

![HA Barometer Card preview](./docs/preview.png)

> _Screenshot placeholder — update once we capture the card in action._

## ✨ Features (v0.1.0)

- Lovelace card written in TypeScript and Lit.
- Works with YAML and UI (GUI) editors.
- Displays the current pressure value, tendency, and last updated time for a chosen sensor.
- Lightweight, maintainable build pipeline using Rollup.

## 🗂️ Repository Structure

```
├── src/
│   ├── ha-barometer-card.ts      # Main card implementation
│   ├── types.ts                  # Shared configuration types
│   └── editor/
│       └── ha-barometer-card-editor.ts  # Lovelace GUI editor
├── docs/
│   └── README.md                 # Additional project documentation stubs
├── rollup.config.mjs             # Build configuration for bundling the card
├── tsconfig.json                 # TypeScript compiler settings
└── package.json                  # Scripts and dependencies
```

All source files live under `src/`, while the bundled JavaScript output will be generated in `dist/` after running `npm run build`.

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Build the card**

   ```bash
   npm run build
   ```

   The bundled file will be available at `dist/ha-barometer-card.js`.

3. **Add to Home Assistant**

   - Copy `dist/ha-barometer-card.js` to your Home Assistant `www` folder.
   - In Lovelace Resources, add:

     ```text
     /local/ha-barometer-card.js
     ```

4. **Use the card**

   ```yaml
   type: custom:ha-barometer-card
   entity: sensor.outdoor_pressure
   name: Garden Barometer
   ```

   You can also configure the card from the Lovelace GUI editor. Look for "HA Barometer Card" in the card picker.

## 🛠️ Development

- `npm run watch` – Rebuild on changes.
- `npm run lint` – Type-check the project.

## 📚 Roadmap Ideas

- Additional dials and styling inspired by classic brass barometers.
- Configurable pressure ranges and units.
- Trend history mini-graph.
- Accessibility enhancements and localization.

Contributions and suggestions are welcome as we build this project step-by-step.
