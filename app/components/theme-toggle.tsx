'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'system':
        return <Monitor className="h-5 w-5 text-primary" />;
      case 'light':
        return <Sun className="h-5 w-5 text-primary" />;
      case 'dark':
        return <Moon className="h-5 w-5 text-primary" />;
      default:
        return <Monitor className="h-5 w-5 text-primary" />;
    }
  };

  const getTooltip = () => {
    switch (theme) {
      case 'system':
        return 'System theme';
      case 'light':
        return 'Light theme';
      case 'dark':
        return 'Dark theme';
      default:
        return 'Toggle theme';
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-card/95 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-105 glow-hover"
      aria-label={getTooltip()}
      title={getTooltip()}
    >
      {getIcon()}
    </button>
  );
}
