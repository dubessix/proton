# 🎨 IRIS OS Light/Dark Theme System

## Overview

IRIS now features a premium Light/Dark theme system with intelligent defaults, persistent storage, and seamless switching. Light Mode defaults to an "Emerald on Frosted Glass" aesthetic, while Dark Mode preserves the existing cyberpunk aesthetic.

## Architecture

### Core Components

1. **Theme Store** (`src/renderer/src/store/theme-store.ts`)
   - Zustand-based state management
   - localStorage persistence
   - electron-store backup persistence
   - CSS class application to document root

2. **Theme Configuration** (`src/renderer/src/config/theme-colors.ts`)
   - TypeScript color definitions
   - Light and Dark theme color palettes
   - All color variables pre-defined

3. **Theme Provider** (`src/renderer/src/context/ThemeProvider.tsx`)
   - React context wrapper
   - Initializes theme on app startup
   - Updates CSS variables dynamically

4. **Theme Hook** (`src/renderer/src/hooks/useTheme.ts`)
   - Custom React hook for accessing theme
   - Returns theme state and utilities
   - Used in components for theme-aware rendering

5. **Tailwind Configuration** (`tailwind.config.js`)
   - Dark mode support via `class` strategy
   - Extended emerald color palette

6. **Global Styles** (`src/index.css`)
   - CSS variables for both themes
   - Smooth transitions between themes
   - Scrollbar styling

### IPC Handlers

Added to `src/main/index.ts`:
- `store-set`: Persist theme preference to electron-store
- `store-get`: Retrieve persisted preference

## Light Mode Design System

**Concept**: "Emerald on Frosted Glass and Silk Gray"

### Colors
- **Primary Background**: #F5F7FA (frosted glass)
- **Card Background**: #FFFFFF (clean white)
- **Primary Accent**: #00C896 (emerald green)
- **Primary Text**: #1A1C1E (dark gray, not pure black)
- **Secondary Text**: #64748B (slate gray)
- **Terminal/Log**: #E2E8F0 (light slate)
- **Icon Background**: #E0F9F0 (mint green)

### Design Principles
- Soft, readable typography with high contrast
- Subtle shadows instead of glows
- Glassmorphism with transparency
- Clean, minimal aesthetic
- Optimized for daylight use

## Dark Mode Design System

**Concept**: Cyberpunk/Neon aesthetic (preserved)

### Colors
- **Primary Background**: #030303 (deep black)
- **Card Background**: #0f0f13 (darker tone)
- **Primary Accent**: #00C896 (emerald - unchanged)
- **Primary Text**: #E4E6EB (light gray)
- **Secondary Text**: #B0B5BE (medium gray)
- **Terminal/Log**: #0a0a0c (very dark)
- **Icon Background**: #0d3f34 (dark teal)

### Design Principles
- High contrast neon accents
- Glowing shadows and effects
- Cyberpunk/futuristic feel
- Optimized for low-light use

## Usage

### Using the Theme in Components

```tsx
import { useThemeStore } from '@/store/theme-store'
import { useTheme } from '@/hooks/useTheme'

function MyComponent() {
  // Option 1: Use the store directly
  const { theme, toggleTheme } = useThemeStore()

  // Option 2: Use the hook (recommended)
  const { theme, colors, isDark, isLight } = useTheme()

  return (
    <div className={isDark ? 'bg-black text-white' : 'bg-white text-black'}>
      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  )
}
```

### Tailwind Classes

For theme-aware styling, use Tailwind's `dark:` modifier:

```tsx
<div className="bg-white dark:bg-black text-slate-900 dark:text-white">
  This div is white in light mode, black in dark mode
</div>
```

### CSS Variables

Theme colors are available as CSS variables:

```tsx
<div style={{ color: 'var(--color-text)' }}>
  Text uses the current theme color
</div>
```

### Theme Utilities

Use the `themeClasses` utility object for common patterns:

```tsx
import { themeClasses } from '@/utils/themeClasses'

<div className={themeClasses.card}>
  Theme-aware card
</div>

<input className={themeClasses.input} type="text" />
```

## Settings Integration

Theme toggle is integrated into Settings > GENERAL tab:

- Visual indicator showing current theme
- One-click toggle button with icons
- Description of current theme
- Persists across app restarts

## File Changes

### Created Files
- `src/renderer/src/store/theme-store.ts`
- `src/renderer/src/config/theme-colors.ts`
- `src/renderer/src/context/ThemeProvider.tsx`
- `src/renderer/src/hooks/useTheme.ts`
- `src/renderer/src/utils/themeClasses.ts`

### Modified Files
- `src/renderer/src/IndexRoot.tsx` - Wrapped with ThemeProvider
- `src/renderer/src/views/Settings.tsx` - Added theme toggle UI
- `src/index.css` - Added CSS variables and theme styles
- `tailwind.config.js` - Added dark mode config
- `src/main/index.ts` - Added IPC handlers

### Updated Components (26 files)
All UI components updated with theme-aware classes:
- CRITICAL: LockScreen, IRIS, Phone, WeatherWidget, StockWidget
- HIGH: Dashboard, Gallery, ParameterEditorDrawer, etc.
- MEDIUM: Supporting widgets and components

## Persistence

Theme preference is persisted in two ways:

1. **localStorage** - Immediate availability, cross-session persistence
2. **electron-store** - OS-level storage, survives app data cleanup

When you change the theme:
1. State updates immediately
2. DOM class applied instantly
3. localStorage updated
4. electron-store updated (async, no wait)

On app startup:
1. localStorage is checked first (fastest)
2. Theme applied to DOM
3. CSS variables initialized

## Testing

To verify the theme system:

1. **Light Mode Test**:
   ```bash
   npm run dev
   # App should load in light mode
   # Navigate to Settings > General
   # Click "Switch to Dark Mode"
   # Verify all components adapt
   ```

2. **Dark Mode Test**:
   ```bash
   # From Settings, click "Switch to Light Mode"
   # Verify light theme loads
   # Check readability and colors
   ```

3. **Persistence Test**:
   ```bash
   # Change theme
   # Restart app
   # Verify theme is preserved
   ```

## CSS Variable Reference

All CSS variables are set in `:root` for light mode and `:root.dark` for dark mode:

```css
--color-background          /* Primary background */
--color-surface             /* Secondary surface */
--color-surface-variant     /* Tertiary surface */
--color-primary             /* Primary accent (emerald) */
--color-primary-light       /* Lighter accent */
--color-primary-dark        /* Darker accent */
--color-text                /* Primary text */
--color-text-secondary      /* Secondary text */
--color-text-tertiary       /* Tertiary text */
--color-border              /* Border colors */
--color-card-bg             /* Card backgrounds */
--color-input-bg            /* Input backgrounds */
--color-terminal-bg         /* Terminal backgrounds */
--color-icon-bg             /* Icon backgrounds */
--color-error               /* Error states */
--color-success             /* Success states */
--color-warning             /* Warning states */
--color-shadow-*            /* Shadow values */
```

## Performance Considerations

- ✅ Theme switching is instant (DOM class toggle)
- ✅ CSS variables update synchronously
- ✅ No layout shifts during theme change
- ✅ localStorage reads are synchronous
- ✅ electron-store updates are async (non-blocking)
- ✅ No unnecessary re-renders with Zustand

## Browser Compatibility

- ✅ Chrome/Chromium 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+

## Future Enhancements

Potential improvements:
- System theme detection (prefers-color-scheme)
- Scheduled theme switching (day/night)
- Custom theme editor
- Theme import/export
- Per-component theme overrides

## Troubleshooting

### Theme not persisting
- Check localStorage.iris_theme_preference
- Verify electron-store prefs.json in userData folder
- Clear browser cache and restart

### Certain colors look off
- Check that component is using `dark:` variant or CSS variables
- Verify Tailwind config includes dark mode
- Ensure component imports are correct

### Performance issues
- Check for excessive re-renders using React DevTools
- Verify only necessary components use useTheme hook
- Profile theme switch performance in DevTools

## Architecture Diagram

```
App (IndexRoot)
  └─ ThemeProvider
      └─ useThemeStore (Zustand)
          ├─ localStorage (immediate)
          └─ IPC → electron-store (async)
      
      DOM
      ├─ CSS Classes (.dark)
      └─ CSS Variables (--color-*)
      
      Components
      └─ useTheme() hook
          └─ Dark: modifier classes
```

---

**Version**: 1.0.0
**Last Updated**: 2026-05-29
**Status**: Production Ready ✅
