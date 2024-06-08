/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color_main: "var(--color-main)",
        color_bg_secondary: "var(--color-bg-secondary)",
        color_bg_primary: "var(--color-bg-primary)",
        color_border: "var(--color-border)",
        color_status_1: "var(--status-green)",
        color_status_2: "var(--status-orange)",
        color_status_3: "var(--status-red)",
        color_status_4: "var(--status-blue)",
        color_status_5: "var(--status-gray)",
        input_disabled: "var(--input-disabled)",
        color_bg_weekend: "var(--color-bg-weekend)",
      },
    },
  },
};
