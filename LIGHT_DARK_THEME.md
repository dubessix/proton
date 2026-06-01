# Light/Dark Theme System - IRIS OS

## Overview

IRIS OS now supports a complete Light/Dark theme system with the default mode being **LIGHT**. Users can toggle between themes from the Settings panel (Command Center > GENERAL tab > APPEARANCE section).

## Design Specifications

### Light Mode (Default)

- **Background**: `#EEF2EF` (soft light gray-green)
- **Panel/Card bg**: `rgba(255,255,255,0.55)` with `backdrop-blur-xl`
- **Panel border**: `rgba(255,255,255,0.8)` or `border-white/80`
- **Primary accent**: `#2ECC8F` (mint green)
- **Secondary accent**: `#27AE73`
- **Text primary**: `#1A1F1A`
- **Text secondary**: `#5A6B5A`
- **Text muted**: `#8FA08F`
- **Terminal/log text**: `#1A7A50` on light background
- **Shadow**: `shadow-sm` (0 1px 2px...)

### Dark Mode (Original)

- **Background**: `#030303` or `#0A0A0A`
- **Panel bg**: `bg-black/40 backdrop-blur-xl`
- **Panel border**: `border-white/5`
- **Accent**: `#2ECC8F` (same as light mode)
- **Text**: `white/90`
- **Shadows**: Emerald glow effects

## Architecture

### Core Files

1. **Theme Store** (`src/renderer/src/store/theme-store.ts`)
   - Manages theme state using Zustand
   - Persists theme preference to `localStorage` and Electron store
   - Default theme: `'light'`
   - Key methods:
     - `setTheme(theme)`: Set theme and apply to document
     - `toggleTheme()`: Toggle between light/dark
     - `initTheme()`: Initialize from storage on app startup

2. **Theme Colors Config** (`src/renderer/src/config/theme-colors.ts`)
   - Defines `lightTheme` and `darkTheme` color objects
   - Includes colors, shadows, glassmorphism settings
   - Exported as `themeMap` for consumption

3. **Theme Hook** (`src/renderer/src/hooks/useTheme.ts`)
   - Simple React hook to access theme state
   - Returns: `{ theme, colors, setTheme, toggleTheme, isDark, isLight }`
   - Used in all components for theme-aware styling

4. **Theme Provider** (`src/renderer/src/context/ThemeProvider.tsx`)
   - React context wrapper (currently in use but not strictly required with hook)
   - Updates CSS custom properties on theme change
   - Sets `document.documentElement` class `'dark'` for Tailwind

5. **Theme Utilities** (`src/renderer/src/utils/themeUtils.ts`)
   - Helper functions for consistent class generation
   - Color palettes for reference

6. **Tailwind Config** (`tailwind.config.js`)
   - Already configured with `darkMode: 'class'`
   - Supports Tailwind's `dark:` prefix for dark mode styles

### CSS Variables

The app uses CSS custom properties (set by ThemeProvider) for dynamic color application:

```css
--color-background
--color-surface
--color-text
--color-border
--color-input-bg
--color-primary
```

## Implementation Guide

### Using Theme in Components

```tsx
import { useTheme } from "@renderer/hooks/useTheme";

export function MyComponent() {
  const { isDark, theme, toggleTheme } = useTheme();

  return (
    <div className={isDark ? "bg-black" : "bg-white"}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### Tailwind Classes Strategy

All styled elements use theme-aware conditional classes:

**Light Mode Colors:**

- Background: `bg-[#EEF2EF]`
- Text Primary: `text-[#1A1F1A]`
- Text Secondary: `text-[#5A6B5A]`
- Accent: `text-[#2ECC8F]`
- Panel: `bg-white/55 border-white/80 shadow-sm`

**Dark Mode Colors:**

- Background: `bg-[#030303]`
- Text Primary: `text-white`
- Text Secondary: `text-white/50`
- Accent: `text-emerald-400`
- Panel: `bg-black/40 border-white/5 shadow-lg`

### Example Pattern

```tsx
const { isDark } = useTheme();

return (
  <div
    className={
      isDark ? "bg-zinc-950 text-white" : "bg-[#EEF2EF] text-[#1A1F1A]"
    }
  >
    <button className={isDark ? "bg-emerald-500" : "bg-[#2ECC8F]"}>
      Action
    </button>
  </div>
);
```

## Updated Components

### Major Components with Light Mode Support:

1. ✅ **IRIS.tsx** (Main UI shell)
2. ✅ **Settings.tsx** (Theme toggle + Settings panel)
3. ✅ **Dashboard.tsx** (Main dashboard view)
4. ✅ **LockScreen.tsx** (Authentication screen)
5. ✅ **Titlebar.tsx** (Window title bar)
6. ✅ **Notes.tsx** (Notes view)
7. ✅ **Gallery.tsx** (Gallery view)
8. ✅ **IndexRoot.tsx** (Theme initialization)

### Partial Support (Dark-themed but not breaking):

- MiniOverlay, TerminalOverlay, TextCommandInput
- WorkFlowEditor, Phone, APP views
- All Widget components

## Theme Toggle Location

**Settings Panel Navigation:**

1. Click "Command Center" in top-left (or SETTINGS tab in navbar)
2. Navigate to **GENERAL** tab
3. Find **APPEARANCE** section
4. Click toggle button to switch between "LIGHT MODE" ↔ "DARK MODE"
5. Theme persists across app restarts

## Testing Checklist

- [ ] Launch app - should start in LIGHT mode
- [ ] Toggle theme in Settings - UI updates immediately
- [ ] Close/reopen app - theme preference persists
- [ ] All panels display correct light mode colors
- [ ] All text is readable in both modes
- [ ] Accent colors (#2ECC8F) work in both modes
- [ ] Borders and shadows display correctly
- [ ] Error HUDs respect theme

## Future Enhancements

- Add theme auto-detection (system preference)
- Add more theme presets (Amber, Cool, Warm, etc.)
- Add per-component theme overrides
- Add animations for smooth theme transitions
- Add high-contrast mode for accessibility

## Files Modified

- `tailwind.config.js` - Already had `darkMode: 'class'`
- `src/renderer/src/IndexRoot.tsx` - Added theme initialization
- `src/renderer/src/UI/IRIS.tsx` - Added theme-aware styling
- `src/renderer/src/views/Settings.tsx` - Enhanced UI with light mode
- `src/renderer/src/views/Dashboard.tsx` - Added useTheme hook
- `src/renderer/src/views/Notes.tsx` - Added light mode support
- `src/renderer/src/views/Gallery.tsx` - Added light mode support
- `src/renderer/src/components/Titlebar.tsx` - Added theme support
- `src/renderer/src/UI/LockScreen.tsx` - Added useTheme import
- `src/renderer/src/utils/themeUtils.ts` - NEW: Theme utilities

## CSS Custom Properties

The following CSS variables are automatically updated when theme changes:

```
--color-background
--color-surface
--color-surface-variant
--color-primary
--color-primary-light
--color-primary-dark
--color-secondary
--color-text
--color-text-secondary
--color-text-tertiary
--color-text-inverse
--color-border
--color-border-light
--color-divider
--color-card-bg
--color-input-bg
--color-terminal-bg
--color-icon-bg
--color-error
--color-success
--color-warning
--color-info
--color-shadow-sm
--color-shadow-md
--color-shadow-lg
--color-shadow-xl
--color-glass-background
--color-glass-border
```

## Troubleshooting

**Theme not persisting:**

- Check browser localStorage for `iris_theme_preference` key
- Verify Electron store configuration

**Theme toggle not working:**

- Ensure `useTheme()` hook is imported in component
- Check that component is wrapped inside `ThemeProvider` (in main.tsx)

**Color inconsistencies:**

- Verify all hardcoded colors match the design spec
- Use theme-aware conditional classes instead of hardcoded colors
- Check for global CSS overrides

## Performance Notes

- Theme updates are instant (class change on document root)
- CSS transitions on body for smooth color changes
- No re-renders of entire tree - only affected components update
- Theme store uses Zustand (minimal overhead)

---

**Last Updated**: 2026-06-01
**Theme System Version**: 1.0
