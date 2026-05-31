/**
 * Theme-aware CSS class utilities for Light/Dark mode
 * Use these to avoid hardcoding dark colors in components
 */

export const themeClasses = {
  // Containers & Backgrounds
  container: "bg-[var(--color-background)] dark:bg-black",
  panel: "bg-[var(--color-surface)] dark:bg-[#0f0f13]",
  panelAlt: "bg-[var(--color-surfaceVariant)] dark:bg-[#050505]",
  card: "bg-[var(--color-surface)] dark:bg-[#0f0f13] border border-[var(--color-border)] dark:border-white/10",
  overlay: "bg-black/40 dark:bg-black/80 backdrop-blur-sm",
  modal: "bg-[var(--color-surface)] dark:bg-[#050505]",

  // Text
  text: {
    primary: "text-[#1A1C1E] dark:text-white",
    secondary: "text-slate-600 dark:text-zinc-400",
    tertiary: "text-slate-500 dark:text-zinc-500",
    inverse: "text-white dark:text-black",
    white: "text-white", // For dark mode only, keep white
    emerald: "text-emerald-600 dark:text-emerald-400",
  },

  // Borders
  border: {
    primary: "border-slate-200 dark:border-white/10",
    secondary: "border-slate-300 dark:border-white/20",
    light: "border-slate-100 dark:border-white/5",
    accent: "border-emerald-300 dark:border-emerald-500/30",
  },

  // Inputs
  input:
    "bg-slate-100 dark:bg-[#050505] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#1A1C1E] dark:text-white placeholder:text-slate-500 dark:placeholder:text-zinc-600 focus:border-emerald-300 dark:focus:border-white/30 focus:outline-none transition-colors",

  inputContainer:
    "flex items-center bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 focus-within:border-emerald-300 dark:focus-within:border-white/30 focus-within:bg-white dark:focus-within:bg-black transition-all duration-300 w-full",

  // Buttons
  button: {
    primary:
      "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg transition-colors",
    secondary:
      "bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-[#1A1C1E] dark:text-white font-bold py-2 px-4 rounded-lg transition-colors",
    ghost:
      "hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-zinc-400 hover:text-[#1A1C1E] dark:hover:text-white py-2 px-4 rounded-lg transition-colors",
    tab: "px-4 py-2 rounded-lg text-sm font-semibold transition-all",
    tabActive:
      "bg-emerald-600 dark:bg-white text-white dark:text-black shadow-md",
    tabInactive:
      "text-slate-600 dark:text-zinc-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5",
  },

  // Specific Components
  lockScreenBg: "bg-slate-100 dark:bg-[#050505]",
  lockScreenText: "text-[#1A1C1E] dark:text-white",

  header:
    "bg-[var(--color-background)] dark:bg-zinc-950/80 border-b border-[var(--color-border)] dark:border-white/5",
  headerText: "text-[var(--color-text)] dark:text-white",

  widgetContainer:
    "bg-white/95 dark:bg-[#050505] border border-slate-200 dark:border-emerald-500/30 rounded-2xl",
  widgetTitle: "text-2xl font-black text-[#1A1C1E] dark:text-white",
  widgetText: "text-[#1A1C1E] dark:text-white/80",

  iconBg: "bg-emerald-100 dark:bg-[#0d3f34]",
  iconColor: "text-emerald-600 dark:text-emerald-400",

  // Shadows
  shadow: {
    sm: "shadow-sm dark:shadow-[0_0_10px_rgba(0,200,150,0.1)]",
    md: "shadow-md dark:shadow-[0_0_20px_rgba(0,200,150,0.15)]",
    lg: "shadow-lg dark:shadow-[0_0_30px_rgba(0,200,150,0.2)]",
  },

  // Glass morphism
  glass:
    "bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-slate-200/30 dark:border-white/10",
};

export const generateThemeClass = (
  lightClass: string,
  darkClass: string,
): string => {
  return `${lightClass} dark:${darkClass}`;
};
