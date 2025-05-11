"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState(() => {
    // Get the initial theme from localStorage or default to "light"
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [twoFactorAuthEnabled, setTwoFactorAuthEnabled] = useState(false);

  // Apply the theme to the document
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

      {/* Theme Toggler */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-2">Theme</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme("light")}
            className={`px-4 py-2 rounded-lg ${
              theme === "light"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`px-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Dark
          </button>
        </div>
      </div>

      {/* Notifications Setting */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-2">Notifications</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={(e) => setNotificationsEnabled(e.target.checked)}
            className="w-5 h-5"
          />
          <span className="text-gray-300">Enable Notifications</span>
        </label>
      </div>

      {/* 2FA Authentication Setting */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-2">Two-Factor Authentication</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={twoFactorAuthEnabled}
            onChange={(e) => setTwoFactorAuthEnabled(e.target.checked)}
            className="w-5 h-5"
          />
          <span className="text-gray-300">Enable 2FA Authentication</span>
        </label>
      </div>
    </div>
  );
}