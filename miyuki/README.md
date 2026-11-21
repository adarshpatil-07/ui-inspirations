# Miyuki (美雪)

A cinematic Japanese winter-inspired opening screen featuring animated Japanese typography and canvas-based snowfall.

## Features
- Japanese title reveal animation
- English title and tagline transition
- Lightweight canvas snowfall
- Responsive typography

## Requirements
- React
- TypeScript

## Usage

1. Copy `OpeningSequence.tsx`, `Snowfall.tsx`, and `miyuki.css` into your React project.
2. Import `OpeningSequence` into your page or App component:

```tsx
import OpeningSequence from "./miyuki/OpeningSequence";

export default function App() {
  return <OpeningSequence />;
}
```

3. Ensure the parent page provides a full-screen area for the experience.

No additional packages are required.