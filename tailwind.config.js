/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color_main: "var(--color-main)",
        color_bg_primary: "var(--color-bg-primary)",
        color_bg_secondary: "var(--color-bg-secondary)",
        color_bg_weekend: "var(--color-bg-weekend)",
        color_border: "var(--color-border)",
        color_status_1: "var(--color-status-1)",
        color_status_2: "var(--color-status-2)",
        color_status_3: "var(--color-status-3)",
        color_status_4: "var(--color-status-4)",
        color_status_5: "var(--color-status-5)",
      },
    },
  },
};
