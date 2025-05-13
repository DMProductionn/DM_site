'use client';
import { Switch } from '@radix-ui/themes';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialMode = savedTheme ? savedTheme === 'dark' : systemDark;
    setDarkMode(initialMode);
    document.documentElement.classList.toggle('dark', initialMode);
  }, []);

  const handleToggle = (checked: boolean) => {
    setDarkMode(checked);
    localStorage.setItem('theme', checked ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', checked);
  };

  return (
    <div className="flex items-center gap-3">
      <p>Темная тема:</p>
      <div className="relative">
        <Switch
          defaultChecked
          color={darkMode ? 'amber' : 'gray'}
          checked={darkMode}
          onCheckedChange={handleToggle}
          size="3"
          radius="full"
        />
        <div
          className="absolute top-[9px] -left-[10px] -translate-y-[10px] w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm transition-transform duration-300 transform-gpu pointer-events-none"
          style={{
            transform: darkMode ? 'translateX(28px)' : 'translateX(10px)',
          }}>
          {darkMode ? (
            <Moon className="h-3 w-3 text-gray-700" />
          ) : (
            <Sun className="h-3 w-3 text-gray-light" />
          )}
        </div>
      </div>
    </div>
  );
};
