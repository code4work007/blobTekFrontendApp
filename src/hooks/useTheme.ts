import { useUiStore } from '@/store/ui.store';
import type { Theme } from '@/types';

export function useTheme() {
  const { theme, setTheme } = useUiStore();

  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme: () => setTheme(isDark ? 'light' : 'dark'),
  };
}

export type { Theme };
